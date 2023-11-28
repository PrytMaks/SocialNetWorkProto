import React from "react";
import Profile from "./Profile.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from '../../redux/profileReducer.js'; 

class ProfileContainerAPI extends React.Component {
  componentDidMount(){
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then((response) => {
      
      this.props.setUserProfile(response.data);

    });
  }
  render(){
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerAPI);
export default ProfileContainer;
