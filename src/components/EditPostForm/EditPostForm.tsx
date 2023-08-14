import { Dialog } from "@mui/material";
import EditPostFormContent from "./EditPostFormContent";

import { closeEditPostFrom } from "../../store/editPostFromSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const EditPostForm = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.editPostForm);

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      onClose={() => dispatch(closeEditPostFrom())}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <EditPostFormContent />
    </Dialog>
  );
};

export default EditPostForm;
