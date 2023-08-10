import {
  Dialog,
  Button,
  DialogTitle,
  TextField,
  DialogActions,
  DialogContent,
} from "@mui/material";

import { login } from "../store/authSlice";

import * as yup from "yup";
import { Formik, Form } from "formik";

import { closeDrawer } from "../store/loginFormSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import ErrorMessage from "../helperComponents/ErrorMessage";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);
  const { open } = useAppSelector((state) => state.loginForm);

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
          username: "Mohamed_12",
          password: "123456",
        }}
        validationSchema={yup.object({
          username: yup.string().required(),
          password: yup.string().required().min(6),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login(values)).then(() => {
            setSubmitting(false);
          });
        }}
      >
        {({ errors, touched, isSubmitting, getFieldProps }) => (
          <Form noValidate>
            <DialogTitle textAlign="center" variant="h4">
              Login
            </DialogTitle>

            <DialogContent>
              {error && <ErrorMessage>{error}</ErrorMessage>}

              <TextField
                label="Username"
                variant="outlined"
                type="text"
                required
                sx={{ width: 1, mt: 2 }}
                {...getFieldProps("username")}
                helperText={
                  touched.username && errors.username && errors.username
                }
                error={!!(touched.username && errors.username)}
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
