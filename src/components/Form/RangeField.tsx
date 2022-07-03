import { FieldHookConfig, useField } from "formik";
import { RangeFieldProps } from "../../interfaces/FormInterfaces";

const RangeField = ({
  label = "",
  ...props
}: RangeFieldProps & FieldHookConfig<string>) => {
  const [field] = useField(props);

  return (
    <div>
      <label>{label + ": "}</label>
      <label>0</label>
      <input type="range" {...field} min="0" max="100" step="1"></input>
      <label>100</label>
    </div>
  );
};

export default RangeField;
