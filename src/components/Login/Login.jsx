import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={'login'} component={'input'}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={'password'} component={'input'}/>
      </div>
      <div>
        <Field type={"checkbox"} name={'rememberMe'} component={'input'} checked={true}/>
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
