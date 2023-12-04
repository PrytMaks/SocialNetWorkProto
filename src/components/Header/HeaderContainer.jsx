import axios from 'axios';
import Header from './Header';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAuthUserDataAC, setCurrentAuthUserDataAC} from '../../redux/authReducer';


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
          //Сетаем свою аву из API 
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {
            withCredentials: true
          }).then((response) => {
              let currentAuthUser = response.data
              props.setCurrentAuthUserDataAC(currentAuthUser);
            })
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



export default connect(mapStateToProps, {setAuthUserDataAC, setCurrentAuthUserDataAC})(HeaderContainer);