import { Field, reduxForm } from "redux-form";
import { TextArea } from "../../common/preloader/formsControls/formsControls";
import {
  requiredField,
  maxLengthCreator,
} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="">
        <Field
          validate={[requiredField, maxLength50]}
          placeholder={"Enter message"}
          name={"newMessageBody"}
          component={TextArea}
        />
      </div>
      <div className="">
        <button>Send!</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default AddMessageReduxForm;
