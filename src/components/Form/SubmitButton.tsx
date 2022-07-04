import Button from "../Button";
import { useFormikContext } from "formik";
import useToggleSubmit from "../../hooks/useToggleSubmit";

const SubmitButton = () => {
  const { errors } = useFormikContext();

  const { disabled } = useToggleSubmit(errors);

  return (
    <Button type="submit" disabled={disabled}>
      Agregar
    </Button>
  );
};

export default SubmitButton;
