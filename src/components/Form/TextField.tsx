import { FieldHookConfig, useField } from "formik";
import { TextFieldProps } from "../../interfaces/FormInterfaces";

const TextField = ({
  type = "text",
  label = "",
  placeholder = "",
  ...props
}: TextFieldProps & FieldHookConfig<string>) => {
  const [field] = useField(props);

  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...field}></input>
    </div>
  );
};

export default TextField;
