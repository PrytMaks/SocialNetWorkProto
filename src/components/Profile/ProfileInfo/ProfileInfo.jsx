import s from "./ProfileInfo.module.css";
import profileBg from "../profileBg.jpg";

const ProfileInfo = () => {
  return (
    <div className="">
      <img src={profileBg} alt="img" className={s.profile_bg} />
      <div className={s.descriptionBlock}>Avatar - description</div>
    </div>
  );
};

export default ProfileInfo;
