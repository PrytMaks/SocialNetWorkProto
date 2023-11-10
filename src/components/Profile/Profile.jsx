//import s from "./Profile.module.css";
import ProflieInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

const Profile = (props) => {
  return (
    <div>
      <ProflieInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
