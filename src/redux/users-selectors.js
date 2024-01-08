import { createSelector } from "reselect";


export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
}
export const getFollowinProgress = (state) => {
  return state.usersPage.followingInProgress;
}


const getUsersSelector = (state) => {
  return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
  debugger;
  return users.filter(u => true);
})
