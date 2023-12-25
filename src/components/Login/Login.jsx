import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/preloader/formsControls/formsControls";
import { requiredField } from "../utils/validators/validators";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field 
          validate={[requiredField]}
          placeholder={"Login"} 
          name={'login'} 
          component={Input}/>
      </div>
      <div>
        <Field 
          validate={[requiredField]}
          placeholder={"Password"} 
          type={'password'}
          name={'password'} 
          component={Input}/>
      </div>
      <div>
        <Field type={"checkbox"} name={'rememberMe'} component={Input} />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  ); 
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData, 123);
    props.login(formData.login, formData.password, formData.rememberMe, true)
  }
  if(props.isAuth){
    return <Navigate to={'/profile'}></Navigate>
  }

  return (
    <div className="">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
    </div>
  );
};
const mapStateToProps  = (state) => ({
  isAuth: state.auth.isAuth
}) 

export default connect(mapStateToProps, {login} )(Login);
