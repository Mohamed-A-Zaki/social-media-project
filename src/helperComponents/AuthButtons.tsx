import { Button, Stack } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { openDrawer } from "../store/loginFormSlice";

/**
 * Renders the authentication buttons.
 *
 * @return {JSX.Element} The rendered authentication buttons.
 */
const AuthButtons = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <Stack direction="row" spacing={1} display={{ xs: "none", md: "flex" }}>
      <Button variant="contained" onClick={() => dispatch(openDrawer())}>
        Login
      </Button>
      <Button variant="contained">Signup</Button>
    </Stack>
  );
};

export default AuthButtons;
