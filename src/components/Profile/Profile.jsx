import profileBg from '../profileBg.jpg'
import s from './Profile.module.css';
const Profile = () => {
  return (
    <main className={s.content}>
    <div className=''>
      <img
        src={profileBg}
        alt="img"
        className={s.profile_bg}
      />
    </div>
    <div className=''>Avatar - description</div>
    <div className="">
      My posts
      <div className="">New post</div>
      <div className={s.posts}>
        <div className={s.item}>Post 1</div>
        <div className={s.item}> 2</div>
      </div>
    </div>
  </main>
  );
};

export default Profile;