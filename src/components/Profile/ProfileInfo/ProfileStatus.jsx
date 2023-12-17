//import Preloader from "../../common/preloader/Preloader";
import { useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
  let [state, setState] = useState({editMode: false})
  // let state = {
  //   editMode: false,
  // };
  
  const activateEditMode = () => {
    //setState - асинхронен
    setState({...state, editMode: true});
  
  }
  const deactivateEditMode = () => {
    // setState - асинхронен
   setState({
    ...state,
    editMode: false
   })
  }
  return (
    <div className="">
      {!state.editMode && (
        <div className={s.status}>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}

      {state.editMode && (
        <div className="">
          <input onBlur={deactivateEditMode} autoFocus={true} type="text" value={props.status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
