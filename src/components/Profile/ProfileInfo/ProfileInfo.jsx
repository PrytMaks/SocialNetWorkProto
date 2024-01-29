import s from "./ProfileInfo.module.css";
import profileBg from "../profileBg.jpg";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import usualPhoto from '../../../assets/images/usualProfile.png'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

  const onPhotoSelect = (e) =>  {
    if(e.target.files.length){
      savePhoto(e.target.files[0]);
    }
  }

  if(!profile){
    return <Preloader/>
  }

  return (
    <div className="">
      <img src={profileBg} alt="img" className={s.profile_bg} />
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || usualPhoto} className = {s.largePhoto} alt="" />
        {isOwner && <input type={"file"} onChange={onPhotoSelect}></input> }
        <span>{profile.fullName}</span>
        <span> O пользователе: {profile.aboutMe}</span>
      </div>
      <ProfileStatus status = {status} updateStatus = {updateStatus}></ProfileStatus>
    </div>
  );
};

export default ProfileInfo;
