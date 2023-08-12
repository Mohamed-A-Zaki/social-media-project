import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Renders the brand component.
 *
 * @return {JSX.Element} - The brand component.
 */
const Brand = (): JSX.Element => {
  return (
    <Typography component={Link} to="/" variant="h4" color={"primary.main"}>
      Brand
    </Typography>
  );
};

export default Brand;
