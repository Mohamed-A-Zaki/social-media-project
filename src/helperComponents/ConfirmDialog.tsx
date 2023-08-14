import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeConfirmDialog } from "../store/confirmDialogSlice";
import { deletePost } from "../store/postsSlice";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const ConfirmDialog = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { open } = useAppSelector((state) => state.confirmDialog);
  const { post, deletePostError } = useAppSelector((state) => state.posts);

  const handleClose = () => {
    dispatch(closeConfirmDialog());
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        Are you shure you want to delete post?
      </DialogTitle>

      <ErrorMessage errorMessage={deletePostError} />

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button variant="contained" color="success" onClick={handleClose}>
          No
        </Button>

        <Button variant="contained" color="error" onClick={handleDelete}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
