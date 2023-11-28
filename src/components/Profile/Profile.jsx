import ProflieInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

const Profile = (props) => {
  
  return (
    <div>
      <ProflieInfo profile = {props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
