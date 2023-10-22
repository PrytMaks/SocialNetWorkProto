import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}


const Dialogs = (props) => {
  return (
  <div className={s.dialogs}>
    <div className={s.dialogs_items}>
      <DialogItem name = 'Maks' id = '1'/>
      <DialogItem name = 'Julia' id = '2'/>
      <DialogItem name = 'Borya' id = '3'/>
      <DialogItem name = 'Natalia' id = '4'/>
      <DialogItem name = 'Inessa' id = '5'/>
    </div>
    <div className={s.messages}>
      <div className={s.message}>Hi</div>
      <div className={s.message}>How is your IT-Kama</div>
      <div className={s.message}>Maaaks</div>
    </div>
  </div>
  );
}

export default Dialogs;
