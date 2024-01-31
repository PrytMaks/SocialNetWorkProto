import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo profile = {props.profile}
      status = {props.status}
      updateStatus = {props.updateStatus}
      isOwner={props.isOwner}
      savePhoto={props.savePhoto}
      saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
