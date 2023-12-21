import s from "./formsControls.module.css";

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      {props.children}
      <div className="">{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const TextArea = (props) => {
  const{ input, meta, ...restProps } = props;
  debugger
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}/>
    </FormControl>
  );
};
export const Input = (props) => {
  const{ input, meta,  ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps}/>
    </FormControl>
  );
};
