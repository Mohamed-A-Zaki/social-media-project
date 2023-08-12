import { Box } from "@mui/material";
import { openAddPostForm } from "../store/addPostFormSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const AddPostButton = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return null;
  }

  return (
    <Box
      position="fixed"
      bottom={30}
      right={30}
      bgcolor="success.main"
      color="#fff"
      fontSize={28}
      width={50}
      height={50}
      borderRadius="50%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ cursor: "pointer" }}
      onClick={() => dispatch(openAddPostForm())}
    >
      +
    </Box>
  );
};

export default AddPostButton;
