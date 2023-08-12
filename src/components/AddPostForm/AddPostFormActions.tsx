import { useAppDispatch } from "../../store/hooks";
import { DialogActions, Button } from "@mui/material";
import { closeAddPostForm } from "../../store/addPostFormSlice";

type AddPostFormActionsProps = {
  disabled: boolean;
};

const AddPostFormActions = ({ disabled }: AddPostFormActionsProps) => {
  const dispatch = useAppDispatch();

  return (
    <DialogActions sx={{ px: 3, pt: 0, pb: 2.5 }}>
      <Button
        color="error"
        variant="contained"
        onClick={() => dispatch(closeAddPostForm())}
      >
        Cancel
      </Button>

      <Button
        type="submit"
        color="success"
        variant="contained"
        disabled={disabled}
      >
        Add Post
      </Button>
    </DialogActions>
  );
};

export default AddPostFormActions;
