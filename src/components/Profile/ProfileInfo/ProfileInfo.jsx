import s from "./ProfileInfo.module.css";
import profileBg from "../profileBg.jpg";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {

  if(!profile){
    return <Preloader/>
  }

  return (
    <div className="">
      <img src={profileBg} alt="img" className={s.profile_bg} />
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} className = {s.largePhoto} alt="" />
        <span>{profile.fullName}</span>
        <span> O пользователе: {profile.aboutMe}</span>
      </div>
      <ProfileStatus status = {status} updateStatus = {updateStatus}></ProfileStatus>
    </div>
  );
};

export default ProfileInfo;
