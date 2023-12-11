import { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import {getUserProfile } from "../../redux/profileReducer.js";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../hoc/AuthRedirect.jsx";
import { compose } from "redux";


// Убрал классовый компонент из-за невозможности использование withRoutes, сделал все с помощью хуков

// class ProfileContainerAPI extends React.Component {
//   componentDidMount(){
//     axios
//     .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//     .then((response) => {

//       this.props.setUserProfile(response.data);

//     });
//   }
//   render(){
//     return (
//       <div>
//         <Profile {...this.props} profile={this.props.profile}/>
//     </div>
//     )
//   }
// }

const ProfileContainer = (props) => {

  let { userId } = useParams();
  
  if (!userId) {
    userId = 2;
  }
  
  useEffect( () => {
    props.getUserProfile(userId);
  }, [userId]);

  return (
    <div>
      <Profile profile={props.profile} />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);




export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ProfileContainer);
