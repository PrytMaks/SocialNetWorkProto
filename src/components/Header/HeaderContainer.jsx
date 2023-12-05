import axios from 'axios';
import Header from './Header';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAuthUserDataAC, setCurrentAuthUserDataAC} from '../../redux/authReducer';
import {getProfile, getAuth} from '../../api/api'

const HeaderContainer = (props) => {

  useEffect( () => {
    getAuth()
      .then((data) => {

        if(data.resultCode === 0){
          let {id, login, email} = data.data
          props.setAuthUserDataAC(id, email, login);
          //Сетаем свою аву из API аву не поставил так как не смог сетнуть фото в профиле ннет возможности
          getProfile(id).then((data) => {
              let currentAuthUser = data;
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