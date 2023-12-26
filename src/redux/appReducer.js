import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};
//AC можно не писать
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCES
});

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    
    promise.then(()=> {
      dispatch(initializedSuccess());
    })
    
  };
};

export default appReducer;
