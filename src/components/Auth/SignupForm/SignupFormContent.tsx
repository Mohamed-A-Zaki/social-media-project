import { useRef } from "react";
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

  const image_file = useRef<HTMLInputElement | null>(null);

  return (
    <Formik
      initialValues={{
        name: "Mohamed",
        username: "Mohamed_1234",
        email: "example-1@example-1.com",
        password: "123456",
        image: "",
      }}
      validationSchema={yup.object({
        name: yup.string().required(),
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(6),
        image: yup.string().required(),
      })}
      onSubmit={async (values) => {
        const formData = new FormData();

        formData.append("name", values.name);
        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("image", image_file.current?.files![0] as File);

        await dispatch(signup(formData));
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

            <FormTextField
              type="file"
              name="image"
              label="Image"
              error={errors.image}
              touched={touched.image}
              getFieldProps={getFieldProps}
              InputLabelProps={{ shrink: true }}
              inputRef={image_file}
            />
          </DialogContent>

          <SignupFormActions disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default SignupFormContent;
