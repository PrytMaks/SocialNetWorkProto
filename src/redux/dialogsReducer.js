const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {

  switch(action.type){
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.body;
      return state;
    case SEND_MESSAGE: 
      let bodyText = state.newMessageText;
      state.newMessageText = '';
      state.messages.push({id: state.messages.length + 1, message: bodyText});
      return state;
    default: return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});

export default dialogsReducer;