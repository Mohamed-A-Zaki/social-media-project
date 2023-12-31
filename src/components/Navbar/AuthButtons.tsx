import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Avatar, Button, Stack, Typography } from "@mui/material";

import { logout } from "../../store/authSlice";
import { openLoginDrawer } from "../../store/loginFormSlice";
import { openSignupDrawer } from "../../store/signupFormSlice";

const AuthButtons = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(openLoginDrawer());
  };

  const handleSignup = () => {
    dispatch(openSignupDrawer());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const renderLoggedInButtons = () => (
    <>
      <Stack
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/profile/${user?.id}`)}
      >
        <Avatar
          src={
            typeof user?.profile_image === "string"
              ? user?.profile_image
              : undefined
          }
          sx={{ width: 30, height: 30 }}
        />
        <Typography>{user?.username}</Typography>
      </Stack>

      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );

  const renderLoggedOutButtons = () => (
    <>
      <Button variant="contained" color="success" onClick={handleLogin}>
        Login
      </Button>

      <Button variant="contained" color="success" onClick={handleSignup}>
        Signup
      </Button>
    </>
  );

  return (
    <Stack direction="row" spacing={1}>
      {!token ? renderLoggedOutButtons() : renderLoggedInButtons()}
    </Stack>
  );
};

export default AuthButtons;
