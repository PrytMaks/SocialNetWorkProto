import Header from './Header';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {getAuth} from '../../redux/authReducer';


const HeaderContainer = (props) => {

  useEffect( () => {
    // usersAPI.getAuth()
    //   .then((data) => {

    //     if(data.resultCode === 0){
    //       let {id, login, email} = data.data
    //       props.setAuthUserDataAC(id, email, login);
    //       //Сетаем свою аву из API аву не поставил так как не смог сетнуть фото в профиле ннет возможности
    //       usersAPI.getProfile(id).then((data) => {
    //           let currentAuthUser = data;
    //           props.setCurrentAuthUserDataAC(currentAuthUser);
    //         })
    //     }

    //   }); Переместили все в санку 
    props.getAuth();
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



export default connect(mapStateToProps, {getAuth})(HeaderContainer);