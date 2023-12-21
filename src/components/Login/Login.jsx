import { Field, reduxForm } from "redux-form";
import { Input } from "../common/preloader/formsControls/formsControls";
import { requiredField } from "../utils/validators/validators";

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
          name={'password'} 
          component={Input}/>
      </div>
      <div>
        <Field type={"checkbox"} name={'rememberMe'} component={Input} checked={true}/>
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



const Login = () => {

  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div className="">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
    </div>
  );
};

export default Login;
