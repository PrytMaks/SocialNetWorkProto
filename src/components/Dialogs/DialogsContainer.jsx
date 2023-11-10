import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
