//import s from "./Profile.module.css";
import ProflieInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

  return (
    <div>
      <ProflieInfo />
      <MyPosts posts = {props.profilePage.posts}
       dispatch = {props.dispatch}
       newPostText = {props.profilePage.newPostText}
       />
    </div>
  );
};

export default Profile;
