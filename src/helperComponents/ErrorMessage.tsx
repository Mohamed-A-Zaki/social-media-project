import { Alert, DialogContentText } from "@mui/material";

type Props = {
  errorMessage: string;
};

const ErrorMessage = ({ errorMessage }: Props): React.ReactElement | null => {
  if (!errorMessage) {
    return null;
  }

  return (
    <DialogContentText>
      <Alert severity="error">{errorMessage}</Alert>
    </DialogContentText>
  );
};

export default ErrorMessage;
