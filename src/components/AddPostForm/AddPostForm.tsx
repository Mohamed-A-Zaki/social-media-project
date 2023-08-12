import { Dialog } from "@mui/material";
import AddPostFormContent from "./AddPostFormContent";
import { closeAddPostForm } from "../../store/addPostFormSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const AddPostForm = () => {
  const { open } = useAppSelector((state) => state.addPostForm);
  const dispatch = useAppDispatch();

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      onClose={() => dispatch(closeAddPostForm())}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <AddPostFormContent />
    </Dialog>
  );
};

export default AddPostForm;
