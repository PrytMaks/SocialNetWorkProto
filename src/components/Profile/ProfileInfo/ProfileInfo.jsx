import s from "./ProfileInfo.module.css";
import profileBg from "../profileBg.jpg";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

  if(!props.profile){
    return <Preloader/>
  }
  //debugger
  return (
    <div className="">
      <img src={profileBg} alt="img" className={s.profile_bg} />
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} className = {s.largePhoto} alt="" />
        <span>{props.profile.fullName}</span>
        <span>О пользователе: {props.profile.aboutMe}</span>
        
      </div>
    </div>
  );
};

export default ProfileInfo;
