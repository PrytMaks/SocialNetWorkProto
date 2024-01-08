//import Preloader from "../../common/preloader/Preloader";

import  React  from 'react';
import { useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
  
  let [state, setState] = useState({editMode: false, status: props.status});


  const activateEditMode = () => {
    //setState - асинхронен
    
    setState({...state, editMode: true});
    debugger

  }

  const onStatusChange = (e) => {
    setState({
      ...state,
      status: e.currentTarget.value
    })
    debugger
  }

  const deactivateEditMode = () => {
    // setState - асинхронен
   setState({
    ...state,
    editMode: false
   })
   props.updateStatus(state.status);
   debugger
        //props.updateStatus(title); 
    
   // props.updateStatus(props.status);
  }

  return (
    <div className="">
      {!state.editMode && (
        <div className={s.status}>
          <span onDoubleClick={activateEditMode}>{props.status || 'Без статуса'}</span>
        </div>
      )}

      {state.editMode && (
        <div className="">
          <input onBlur={deactivateEditMode} 
                 autoFocus={true} type="text"
                 value={state.status} 
                 onChange={onStatusChange}/>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
