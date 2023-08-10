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
