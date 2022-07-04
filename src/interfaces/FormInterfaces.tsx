export enum TextFieldTypes {
  text = "text",
  password = "password",
}

export interface ButtonProps {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  children: string;
  handleClick?: void;
}

export interface TextFieldProps {
  label: string;
  placeholder?: string;
  type?: "text" | "password";
}

export interface RangeFieldProps {
  label: string;
}
