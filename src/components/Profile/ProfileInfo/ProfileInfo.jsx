import s from "./ProfileInfo.module.css";
import profileBg from "../profileBg.jpg";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {

  if(!props.profile){
    return <Preloader/>
  }

  return (
    <div className="">
      <img src={profileBg} alt="img" className={s.profile_bg} />
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} className = {s.largePhoto} alt="" />
        <span>{props.profile.fullName}</span>
        <span> O пользователе: {props.profile.aboutMe}</span>
      </div>
      <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}></ProfileStatus>
    </div>
  );
};

export default ProfileInfo;
