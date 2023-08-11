import { Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { openLoginDrawer } from "../store/loginFormSlice";
import { openSignupDrawer } from "../store/signupFormSlice";
import { logout } from "../store/authSlice";

/**
 * Renders the authentication buttons.
 *
 * @return {JSX.Element} The rendered authentication buttons.
 */
const AuthButtons = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  return (
    <Stack direction="row" spacing={1} display={{ xs: "none", md: "flex" }}>
      {!token ? (
        <>
          <Button
            variant="contained"
            onClick={() => dispatch(openLoginDrawer())}
          >
            Login
          </Button>

          <Button
            variant="contained"
            onClick={() => dispatch(openSignupDrawer())}
          >
            Signup
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(logout())}
        >
          Logout
        </Button>
      )}
    </Stack>
  );
};

export default AuthButtons;
