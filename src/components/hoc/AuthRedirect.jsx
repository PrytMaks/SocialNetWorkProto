import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

//Ниже мой HOC который по пропсам из целевой компоненты 
export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if(!props.isAuth) return <Navigate to={'/login'}></Navigate>

    return <Component {...props}/>
  }

  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
  
  return ConnectedRedirectComponent
}