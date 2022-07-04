import { FieldHookConfig, useField } from "formik";
import { RangeFieldProps } from "../../interfaces/FormInterfaces";

import "./FormComponent.css";

const RangeField = ({
  label = "",
  ...props
}: RangeFieldProps & FieldHookConfig<string>) => {
  const [field] = useField(props);

  return (
    <div className="range-field">
      <label className="range-field__label">{label + ": "}</label>
      <div className="range-field__values-container">
        <label className="range-field__min">0</label>
        <input
          className="range-field__value"
          type="range"
          {...field}
          min="0"
          max="100"
          step="1"
        ></input>
        <label className="range-field__max">100</label>
      </div>
    </div>
  );
};

export default RangeField;
