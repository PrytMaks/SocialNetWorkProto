import { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import {getUserProfile } from "../../redux/profileReducer.js";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";


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

  if(!props.isAuth){
    return <Navigate to={'/login'}></Navigate>
  }
 
  return (
    <div>
      <Profile profile={props.profile} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
