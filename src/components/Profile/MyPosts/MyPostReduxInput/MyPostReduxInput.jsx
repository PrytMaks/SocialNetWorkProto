import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { TextArea } from "../../../common/preloader/formsControls/formsControls";
const maxLength30 = maxLengthCreator(30);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="">
        <Field
          validate={[requiredField, maxLength30]}
          component={TextArea}
          name={"newPostText"}
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
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

export default AddNewPostReduxForm;
