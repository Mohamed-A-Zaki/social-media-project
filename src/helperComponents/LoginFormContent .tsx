import { DialogTitle, DialogContent } from "@mui/material";

import * as yup from "yup";
import { Formik, Form } from "formik";

import ErrorMessage from "./ErrorMessage";
import LoginFormTextField from "./LoginFormTextField";

import { login } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import LoginFormActions from "./LoginFormActions";

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
        username: "Mohamed_12",
        password: "123456",
      }}
      validationSchema={yup.object({
        username: yup.string().required(),
        password: yup.string().required().min(6),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(login(values));
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting, getFieldProps }) => (
        <Form noValidate>
          <DialogTitle textAlign="center" variant="h4">
            Login
          </DialogTitle>

          <DialogContent>
            <ErrorMessage errorMessage={error} />

            <LoginFormTextField
              type="text"
              name="username"
              label="Username"
              error={errors.username}
              touched={touched.username}
              getFieldProps={getFieldProps}
            />

            <LoginFormTextField
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
