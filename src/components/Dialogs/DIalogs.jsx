import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let newMessageBody = state.newMessageText;

  let dialogsElements = state.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));
  let messagesElements = state.messages.map((el) => (
    <Message message={el.message} id={el.id} key={el.id} />
  ));


  let onNewMessageChange = (e) => {

    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };
  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className="">
          {messagesElements} 
        </div>
        <div className="">
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
          />
        </div>
        <div className="">
          <button onClick={onSendMessageClick}>Send!</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
