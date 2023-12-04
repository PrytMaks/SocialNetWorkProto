import axios from 'axios';
import Header from './Header';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAuthUserDataAC } from '../../redux/authReducer';


const HeaderContainer = (props) => {

  useEffect( () => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then((response) => {

        if(response.data.resultCode === 0){
          let {id, login, email} = response.data.data
          props.setAuthUserDataAC(id, email, login);
        }
      });
  }, [props]);

  return ( 
    <Header {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}



export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);