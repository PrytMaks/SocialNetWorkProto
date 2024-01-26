import s from "./formsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: {touched, error}, children,  ...props }) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      {children}
      <div className="">{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
  return (
    <div className="">
      <Field
        validate={validators}
        placeholder={placeholder}
        name={name}
        component={component}
        {...props}
      />{text}
    </div>
  );
};
