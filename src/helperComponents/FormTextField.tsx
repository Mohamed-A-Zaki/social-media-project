import { FieldConfig, FieldInputProps } from "formik";
import { TextField, TextFieldProps } from "@mui/material";

type FormTextFieldProps = {
  name: string;
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  getFieldProps: <V>(props: string | FieldConfig<V>) => FieldInputProps<V>;
} & Omit<TextFieldProps, "variant" | "error">;

const FormTextField = (props: FormTextFieldProps): JSX.Element => {
  const { name, error, touched, getFieldProps, ...rest } = props;

  return (
    <TextField
      {...rest}
      required
      variant="outlined"
      sx={{ width: 1, mt: 2 }}
      {...getFieldProps(name)}
      error={!!(touched && error)}
      helperText={touched && error ? error : ""}
    />
  );
};

export default FormTextField;
