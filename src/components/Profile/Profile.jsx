//import s from "./Profile.module.css";
import ProflieInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <ProflieInfo />
      <MyPosts state = {props.state}/>
    </div>
  );
};

export default Profile;
