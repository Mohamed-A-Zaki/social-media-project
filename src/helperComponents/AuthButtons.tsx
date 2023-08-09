import { Button, Stack } from "@mui/material";

/**
 * Renders the authentication buttons.
 *
 * @return {JSX.Element} The rendered authentication buttons.
 */
const AuthButtons = (): JSX.Element => {
  return (
    <Stack direction="row" spacing={1} display={{ xs: "none", md: "flex" }}>
      <Button variant="contained">Login</Button>
      <Button variant="contained">Signup</Button>
    </Stack>
  );
};

export default AuthButtons;
