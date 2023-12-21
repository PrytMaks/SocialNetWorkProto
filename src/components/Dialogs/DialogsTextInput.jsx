import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="">
        <Field
          placeholder={"Enter message"}
          name={"newMessageBody"}
          component={"textarea"}
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
