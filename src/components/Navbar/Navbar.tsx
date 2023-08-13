import { AppBar, Toolbar, Container } from "@mui/material";

import Brand from "./Brand";
import BarIcon from "./BarIcon";
import LinksList from "./LinksList";
import AuthButtons from "./AuthButtons";

/**
 * Renders the Navbar component.
 *
 * @return {JSX.Element} The rendered Navbar component.
 */
const Navbar = (): JSX.Element => {
  const renderContent = () => {
    return (
      <>
        <Brand />
        <LinksList />
        <AuthButtons />
        <BarIcon />
      </>
    );
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", color: "#000" }}>
      <Container fixed>
        <Toolbar>{renderContent()}</Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
