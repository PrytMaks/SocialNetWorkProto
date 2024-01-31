import s from "./ProfileInfo.module.css";
import profileBg from "../profileBg.jpg";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import usualPhoto from "../../../assets/images/usualProfile.png";
import ProfileDataForm  from './ProfileDataForm'
import { useState } from "react";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  const onPhotoSelect = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    console.log(formData);
    saveProfile(formData).then(()=>{
      setEditMode(false)
    })
  }

  if (!profile) {
    return <Preloader />;
  }
  debugger
  return (
    <div className="">
      <img src={profileBg} alt="img" className={s.profile_bg} />
      <div className={s.descriptionBlock}>
        <img
          src={profile.photos.large || usualPhoto}
          className={s.largePhoto}
          alt=""
        />
        {isOwner && <input type={"file"} onChange={onPhotoSelect}></input>}
        <span>{profile.fullName}</span>
        <span> O пользователе: {profile.aboutMe}</span>
      </div>
      {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={ ()=> setEditMode(true) }/>}
    
      <ProfileStatus
        status={status}
        updateStatus={updateStatus}
      ></ProfileStatus>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode}) => {
  return (
    <div className="">
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div className="">
        <b>FullName: </b> {profile.fullName}
      </div>
      <div className="">
        <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {profile.lookingForAJob && (
        <div className="">
          <b>My professional skills</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div className="">
        <b>About me</b> {profile.aboutMe}
      </div>
      <div className="">
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          ></Contact>
        ))}
      </div>
    </div>
  );
};


const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}:</b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
