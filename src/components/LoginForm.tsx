import {
  Dialog,
  Button,
  DialogTitle,
  TextField,
  DialogActions,
  DialogContent,
} from "@mui/material";

import * as yup from "yup";
import { Formik, Form } from "formik";

import { closeDrawer } from "../store/loginFormSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const LoginForm = () => {
  const { open } = useAppSelector((state) => state.loginForm);

  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(closeDrawer());

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Formik
        initialValues={{
          email: "example@example.com",
          password: "12345",
        }}
        validationSchema={yup.object({
          email: yup.string().email().required(),
          password: yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({ errors, touched, isSubmitting, getFieldProps }) => (
          <Form noValidate>
            <DialogTitle textAlign="center" variant="h4" sx={{ pb: 0 }}>
              Login
            </DialogTitle>

            <DialogContent>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                required
                sx={{ width: 1, mt: 2 }}
                {...getFieldProps("email")}
                helperText={touched.email && errors.email && errors.email}
                error={!!(touched.email && errors.email)}
              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                required
                sx={{ width: 1, mt: 2 }}
                {...getFieldProps("password")}
                helperText={
                  touched.password && errors.password && errors.password
                }
                error={!!(touched.password && errors.password)}
              />
            </DialogContent>

            <DialogActions sx={{ px: 3, pt: 0, pb: 2.5 }}>
              <Button variant="contained" color="error" onClick={handleClose}>
                Cancel
              </Button>

              <Button
                type="submit"
                color="success"
                variant="contained"
                disabled={isSubmitting}
              >
                Login
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default LoginForm;
