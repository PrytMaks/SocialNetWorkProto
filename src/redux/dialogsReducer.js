const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messages: [
    {
      id: 1,
      message: "Hi!",
    },
    {
      id: 2,
      message: "How is your IT-Kamasutra ?",
    },
    {
      id: 3,
      message: "Yo nigger",
    },
    {
      id: 4,
      message: "Yo",
    },
    {
      id: 5,
      message: "Yo",
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
  newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch(action.type){
    case UPDATE_NEW_MESSAGE_TEXT:
      stateCopy = {
        ...state,
        newMessageText: action.body
      }
      return stateCopy;

    case SEND_MESSAGE: { 
      let bodyText = state.newMessageText;
      stateCopy = {
        ...state,
        newMessageText: '',
        messages : [...state.messages, {id: state.messages.length + 1, message: bodyText}],
      }
      return stateCopy;
    }
    default: 
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});

export default dialogsReducer;