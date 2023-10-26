//import s from "./Profile.module.css";
import ProflieInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <ProflieInfo />
      <MyPosts posts = {props.state.posts} addPost = {props.addPost}/>
    </div>
  );
};

export default Profile;
