import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Navigate } from "react-router-dom";
import AddMessageReduxForm from "./DialogsTextInput/DialogsTextInput";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));
  let messagesElements = state.messages.map((el) => (
    <Message message={el.message} id={el.id} key={el.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className="">{messagesElements}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
