const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: "Hi!",
      status: "Hey! All be goood!!!!",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      followed: true,
      fullName: "How is your IT-Kamasutra ?",
      status: "Hey! All be goood!!!!",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 3,
      followed: false,
      fullName: "Yo fellas",
      status: "Hey! All be goood!!!!",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      followed: false,
      id: 4,
      followed: false,
      fullName: "Yo",
      status: "Hey! All be goood!!!!",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 5,
      followed: false,
      fullName: "Yo",
      status: "Hey! All be goood!!!!",
      location: { city: "Minsk", country: "Belarus" },
    },
  ],
  dialogs: [
    {
      id: 1,
      name: "Max",
    },
    {
      id: 2,
      name: "Boris",
    },
    {
      id: 3,
      name: "Natalia",
    },
    {
      id: 4,
      name: "Julia",
    },
    {
      id: 5,
      name: "Inessa",
    },
  ],
  newMessageText: "",
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id == action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id == action.userId) {
            return { ...user, followed: false };
          }
          return user
        }),
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = () => ({type: AND});

export default usersReducer;
