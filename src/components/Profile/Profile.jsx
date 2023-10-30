//import s from "./Profile.module.css";
import ProflieInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

  return (
    <div>
      <ProflieInfo />
      <MyPosts posts = {props.profilePage.posts}
       addPost = {props.addPost}
       newPostText = {props.profilePage.newPostText}
       updateNewPostText={props.updateNewPostText}
       />
    </div>
  );
};

export default Profile;
