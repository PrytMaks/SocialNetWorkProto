import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsData = [
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
  ];
  
  let dialogsElements = dialogsData.map( el => <DialogItem name={el.name} id={el.id}/>)

  let messagesData = [
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
  ]
  let messagesElements = messagesData.map( el =><Message message={el.message} id={el.id} />)

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
