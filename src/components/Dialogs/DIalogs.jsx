import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map( el => <DialogItem name={el.name} id={el.id}/>);
  let messagesElements = props.state.messagesData.map( el =><Message message={el.message} id={el.id} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
