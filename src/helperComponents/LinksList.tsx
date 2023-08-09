import { Link, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

/**
 * Renders a list of links in a row, with spacing and font size.
 *
 * @return {JSX.Element} - A stack of links.
 */
const LinksList = (): JSX.Element => {
  return (
    <Stack
      direction="row"
      spacing={2}
      fontSize="1.2rem"
      display={{ xs: "none", md: "flex" }}
      sx={{ "& .active": { color: "primary.main" } }}
    >
      <Link component={NavLink} to="/" color="inherit">
        Home
      </Link>
      <Link component={NavLink} to="/about" color="inherit">
        About
      </Link>
      <Link component={NavLink} to="/contact" color="inherit">
        Contact
      </Link>
    </Stack>
  );
};

export default LinksList;
