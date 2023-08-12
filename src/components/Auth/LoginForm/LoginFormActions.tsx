import { Button, DialogActions } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import { closeLoginDrawer } from "../../../store/loginFormSlice";

type LoginFormActionsProps = {
  disabled: boolean;
};

/**
 * Renders the actions for the login form.
 *
 * @param {Props} disabled - A boolean indicating if the form is disabled.
 * @return {JSX.Element} The JSX element representing the login form actions.
 */
const LoginFormActions = ({ disabled }: LoginFormActionsProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <DialogActions sx={{ px: 3, pt: 0, pb: 2.5 }}>
      <Button
        color="error"
        variant="contained"
        onClick={() => dispatch(closeLoginDrawer())}
      >
        Cancel
      </Button>

      <Button
        type="submit"
        color="success"
        variant="contained"
        disabled={disabled}
      >
        Login
      </Button>
    </DialogActions>
  );
};

export default LoginFormActions;
