import { useEffect, useState } from "react";
import { ToggleSubmitProps } from "../interfaces/CustomHooksInterfaces";

const useToggleSubmit = (errors: ToggleSubmitProps) => {
  const [disabled, setDisabled] = useState(true);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      setDisabled(true);
      return;
    }

    if (Object.keys(errors).length === 0) setDisabled(false);
    else setDisabled(true);
  }, [errors, firstRender]);

  return { disabled };
};

export default useToggleSubmit;
