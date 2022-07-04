import { FieldHookConfig, useField } from "formik";
import { TextFieldProps } from "../../interfaces/FormInterfaces";

const TextField = ({
  type = "text",
  label = "",
  placeholder = "",
  ...props
}: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  console.log(meta);

  return (
    <div className="text-field">
      <label className="text-field__label">{label + ": "}</label>
      <input
        className={`text-field__input ${
          meta.touched && meta.error ? "text-field-error" : ""
        }`}
        type={type}
        placeholder={placeholder}
        {...field}
      ></input>
    </div>
  );
};

export default TextField;
