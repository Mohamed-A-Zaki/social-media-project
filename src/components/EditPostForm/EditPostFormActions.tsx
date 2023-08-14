import { useAppDispatch } from "../../store/hooks";
import { DialogActions, Button } from "@mui/material";
import { closeEditPostFrom } from "../../store/editPostFromSlice";

type EditPostFormActionsProps = {
  disabled: boolean;
};

const EditPostFormActions = ({ disabled }: EditPostFormActionsProps) => {
  const dispatch = useAppDispatch();

  return (
    <DialogActions sx={{ px: 3, pt: 0, pb: 2.5 }}>
      <Button
        color="error"
        variant="contained"
        onClick={() => dispatch(closeEditPostFrom())}
      >
        Cancel
      </Button>

      <Button
        type="submit"
        color="success"
        variant="contained"
        disabled={disabled}
      >
        Edit Post
      </Button>
    </DialogActions>
  );
};

export default EditPostFormActions;
