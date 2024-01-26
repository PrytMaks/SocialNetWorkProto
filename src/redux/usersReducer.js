import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/utils/objectHelpers";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  //followingInProgress: false, было просто флагом, но дезейблило все кнопки, потому решение с массивом актуальнее
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
        // state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
        // state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: false };
        //   }
        //   return user;
        // }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      console.log(action);
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId] // если тру - возвращает старый массив + новый айди по которому кликнули
          : state.followingInProgress.filter((id) => id !== action.userId), //если фолс возвращает новый массив удаляя оттуда пользователся по переданному userId
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (id) => ({ type: FOLLOW, userId: id });
export const unfollowSuccess = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

//Thunk

export const getUsersThunkCreator =
  (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    //импортировали getUsers из DAL API (слой доступа к данным)

    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let response = await apiMethod(userId)

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

//Далее санки и санк криэйторы будут называться как обычные функции (так принято) вместо ***ThunkCreator.

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};




export default usersReducer;
