import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
  <div className={s.dialogs}>
    <div className={s.dialogs_items}>
      <div className={s.dialog + ' ' + s.active}>
        Макс
      </div>
      <div className={s.dialog}>
        Андрей
      </div>
      <div className={s.dialog}>
        Света
      </div>
      <div className={s.dialog}>
        Вова
      </div>
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
