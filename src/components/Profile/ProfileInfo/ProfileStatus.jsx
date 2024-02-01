//import Preloader from "../../common/preloader/Preloader";

import  React  from 'react';
import { useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
  
  let [state, setState] = useState({editMode: false, status: props.status});


  const activateEditMode = () => {
    //setState - асинхронен
    
    props.isOwner && setState({...state, editMode: true});
  }

  const onStatusChange = (e) => {
    setState({
      ...state,
      status: e.currentTarget.value
    })
  }

  const deactivateEditMode = () => {
    // setState - асинхронен
   setState({
    ...state,
    editMode: false
   })
   props.updateStatus(state.status);
   
        //props.updateStatus(title); 
    
   // props.updateStatus(props.status);
  }

  return (
    <div className="">
      {!state.editMode && (
        <div className={s.status}>
          <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || 'Без статуса'}</span>
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
