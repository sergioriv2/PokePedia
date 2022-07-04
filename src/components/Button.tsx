import { ButtonProps } from "../interfaces/FormInterfaces";
import "./Button.css";

const Button = ({ handleClick, children, ...props }: ButtonProps) => {
  return (
    <button onClick={() => handleClick} {...props} className="button">
      {children}
    </button>
  );
};

export default Button;
