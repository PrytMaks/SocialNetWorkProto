import { Field, reduxForm } from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="">
        <Field
          component={'textarea'}
          name={'newPostText'}
          id=""
          cols="30"
          rows="10"

        />
      </div>
      <div className="">
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm);

export default AddNewPostReduxForm;
