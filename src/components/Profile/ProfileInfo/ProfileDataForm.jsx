import React from "react";
import {
  createField,
  Input,
  TextArea,
} from "../../common/preloader/formsControls/formsControls";
import { reduxForm } from "redux-form";
import s from '../../common/preloader/formsControls/formsControls.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <button onClick={() => {}}>Save</button>
      </div>
      {error && <div className={s.formSummaryError}> {error} </div>}
      <div className="">
        <b>FullName: </b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div className="">
        <b>Looking for a job:</b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
     
        <div className="">
          <b>My professional skills</b> 
          {createField(
            "My professional skills",
            "lookingForAJobDescription",
            [],
            TextArea
          )}
        </div>

      <div className="">
        <b>About me</b> 
        {createField("About me", "aboutMe", [], TextArea)}
      </div>
      <div className="">
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => (
          <div key={key}>
            <b>{key}</b>: {createField(key, "contacts." + key, [], Input)}
           </div>
        ))}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "editProfile",
})(ProfileDataForm);

export default ProfileDataReduxForm;
