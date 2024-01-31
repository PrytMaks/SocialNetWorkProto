import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Input } from "../common/preloader/formsControls/formsControls";
import { requiredField } from "../utils/validators/validators";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import s from '../common/preloader/formsControls/formsControls.module.css'
import { createField } from "../common/preloader/formsControls/formsControls";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  
  return (
    <form action="" onSubmit={handleSubmit}>
      {createField('login', 'login', [requiredField], Input)}
      {createField('Password', 'password', [requiredField], Input, {type: 'password'})}
      {createField(null, 'rememberMe', [], Input, {type: 'checkbox'},'remember me')}
      {captchaUrl && <img src={captchaUrl} alt={'captcha'}></img>}

      {captchaUrl && createField('Symbols from image', 'captcha', [requiredField], Input, {})}

      {error && <div className={s.formSummaryError}>{error}</div>}
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
    console.log(formData);
    props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
  }
  if(props.isAuth){
    return <Navigate to={'/profile'}></Navigate>
  }

  return (
    <div className="">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}></LoginReduxForm>
    </div>
  );
};
const mapStateToProps  = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
}) 

export default connect(mapStateToProps, {login} )(Login);
