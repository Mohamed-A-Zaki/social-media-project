import { DialogTitle, DialogContent } from "@mui/material";

import * as yup from "yup";
import { Formik, Form } from "formik";

import { signup } from "../../../store/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import SignupFormActions from "./SignupFormActions";
import ErrorMessage from "../../../helperComponents/ErrorMessage";
import FormTextField from "../../../helperComponents/FormTextField";

/**
 * Generates the content for the signup form.
 *
 * @return {JSX.Element} The JSX element representing the signup form content.
 */
const SignupFormContent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);

  return (
    <Formik
      initialValues={{
        name: "Mohamed",
        username: "Mohamed_123",
        email: "example@example.com",
        password: "123456",
      }}
      validationSchema={yup.object({
        name: yup.string().required(),
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(6),
      })}
      onSubmit={async (values) => {
        await dispatch(signup(values));
      }}
    >
      {({ errors, touched, isSubmitting, getFieldProps }) => (
        <Form noValidate>
          <DialogTitle textAlign="center" variant="h4">
            Register New User
          </DialogTitle>

          <DialogContent>
            <ErrorMessage errorMessage={error} />

            <FormTextField
              type="text"
              name="name"
              label="name"
              error={errors.name}
              touched={touched.name}
              getFieldProps={getFieldProps}
            />

            <FormTextField
              type="text"
              name="username"
              label="Username"
              error={errors.username}
              touched={touched.username}
              getFieldProps={getFieldProps}
            />

            <FormTextField
              type="email"
              name="email"
              label="email"
              error={errors.email}
              touched={touched.email}
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

          <SignupFormActions disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default SignupFormContent;
