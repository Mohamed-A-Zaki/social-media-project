import { AppBar, Toolbar, Container } from "@mui/material";

import Brand from "../helperComponents/Brand";
import BarIcon from "../helperComponents/BarIcon";
import LinksList from "../helperComponents/LinksList";
import AuthButtons from "../helperComponents/AuthButtons";

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
          <>
            <Brand />
            <LinksList />
            <AuthButtons />
            <BarIcon />
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
