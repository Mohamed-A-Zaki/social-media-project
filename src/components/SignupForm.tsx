import { Dialog } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeSignupDrawer } from "../store/signupFormSlice";
import SignupFormContent from "../helperComponents/SignupFormContent";

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.signupFrorm);

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      onClose={() => dispatch(closeSignupDrawer())}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <SignupFormContent />
    </Dialog>
  );
};

export default SignupForm;
