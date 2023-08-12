import { Button, DialogActions } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import { closeSignupDrawer } from "../../../store/signupFormSlice";

type SignupFormActionsProps = {
  disabled: boolean;
};

const SignupFormActions = ({ disabled }: SignupFormActionsProps) => {
  const dispatch = useAppDispatch();

  return (
    <DialogActions sx={{ px: 3, pt: 0, pb: 2.5 }}>
      <Button
        color="error"
        variant="contained"
        onClick={() => dispatch(closeSignupDrawer())}
      >
        Cancel
      </Button>

      <Button
        type="submit"
        color="success"
        variant="contained"
        disabled={disabled}
      >
        Regidter
      </Button>
    </DialogActions>
  );
};

export default SignupFormActions;
