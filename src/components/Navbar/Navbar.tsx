import { AppBar, Toolbar, Container } from "@mui/material";

import Brand from "./Brand";
import AuthButtons from "./AuthButtons";

/**
 * Renders the Navbar component.
 *
 * @return {JSX.Element} The rendered Navbar component.
 */
const Navbar = (): JSX.Element => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", color: "#000" }}>
      <Container fixed>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Brand />
          <AuthButtons />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
