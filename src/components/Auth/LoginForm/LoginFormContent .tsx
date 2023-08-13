import { DialogTitle, DialogContent } from "@mui/material";

import * as yup from "yup";
import { Formik, Form } from "formik";

import { login } from "../../../store/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import LoginFormActions from "./LoginFormActions";
import ErrorMessage from "../../../helperComponents/ErrorMessage";
import FormTextField from "../../../helperComponents/FormTextField";

/**
 * Renders the content of the login form.
 *
 * @return {JSX.Element} The rendered login form content.
 */
const LoginFormContent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);

  return (
    <Formik
      initialValues={{
        username: "Mohamed_1234",
        password: "123456",
      }}
      validationSchema={yup.object({
        username: yup.string().required(),
        password: yup.string().required().min(6),
      })}
      onSubmit={async (values) => {
        await dispatch(login(values));
      }}
    >
      {({ errors, touched, isSubmitting, getFieldProps }) => (
        <Form noValidate>
          <DialogTitle textAlign="center" variant="h4">
            Login
          </DialogTitle>

          <DialogContent>
            <ErrorMessage errorMessage={error} />

            <FormTextField
              type="text"
              name="username"
              label="Username"
              error={errors.username}
              touched={touched.username}
              getFieldProps={getFieldProps}
            />

            <FormTextField
              type="password"
              name="password"
              label="Password"
              error={errors.password}
              touched={touched.password}
              getFieldProps={getFieldProps}
            />
          </DialogContent>

          <LoginFormActions disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormContent;
