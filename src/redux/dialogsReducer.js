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
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch(action.type){
    case SEND_MESSAGE: { 
      let bodyText = action.newMessageBody;
      stateCopy = {
        ...state,
        messages : [...state.messages, {id: state.messages.length + 1, message: bodyText}],
      }
      return stateCopy;
    }
    default: 
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;