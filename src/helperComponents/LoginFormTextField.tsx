import { TextField } from "@mui/material";
import { FieldConfig, FieldInputProps } from "formik";

interface LoginFormTextFieldProps {
  label: string;
  name: string;
  error: string | undefined;
  touched: boolean | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  getFieldProps: <V>(props: string | FieldConfig<V>) => FieldInputProps<V>;
}

/**
 * Renders a text field component for a login form.
 *
 * @param {LoginFormTextFieldProps} props - The properties for the text field component.
 * @return {JSX.Element} The rendered text field component.
 */
const LoginFormTextField = (props: LoginFormTextFieldProps): JSX.Element => {
  const { label, name, error, touched, type, getFieldProps } = props;

  return (
    <TextField
      required
      type={type}
      label={label}
      variant="outlined"
      sx={{ width: 1, mt: 2 }}
      {...getFieldProps(name)}
      error={touched && error ? true : false}
      helperText={touched && error ? error : ""}
    />
  );
};

export default LoginFormTextField;
