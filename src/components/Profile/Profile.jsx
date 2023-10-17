import profileBg from "./profileBg.jpg";
import s from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <main className={s.content}>
      <div className="">
        <img src={profileBg} alt="img" className={s.profile_bg} />
      </div>
      <div className={s.user_wall_wrapper}>
        <div className="">Avatar - description</div>
        <MyPosts />
      </div>
    </main>
  );
};

export default Profile;
