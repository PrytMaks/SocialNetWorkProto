import { useEffect } from "react";
import Profile from "./Profile.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer.js";
import { useParams } from "react-router-dom";


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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, [props, userId]);

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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
