import React from "react";
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
  debugger
  let state = props.store.getState().dialogsPage;

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  return (
    <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage={onSendMessageClick}
      dialogsPage= {state}
    />
  ) 
};

export default DialogsContainer;
