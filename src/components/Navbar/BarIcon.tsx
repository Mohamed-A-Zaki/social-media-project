import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton } from "@mui/material";

/**
 * Renders a bar icon component.
 *
 * @return {JSX.Element} The rendered bar icon component.
 */
const BarIcon = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box p={3} width={300}></Box>
      </Drawer>
    </>
  );
};

export default BarIcon;
