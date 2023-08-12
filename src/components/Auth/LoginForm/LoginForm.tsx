import { Dialog } from "@mui/material";
import LoginFormContent from "./LoginFormContent ";
import { closeLoginDrawer } from "../../../store/loginFormSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

/**
 * Renders the login form component.
 *
 * @return {JSX.Element} The login form component.
 */
const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.loginForm);

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      onClose={() => dispatch(closeLoginDrawer())}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <LoginFormContent />
    </Dialog>
  );
};

export default LoginForm;
