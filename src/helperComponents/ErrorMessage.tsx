import { DialogContentText } from "@mui/material";

type Props = {
  errorMessage: string;
};

/**
 * Renders an error message if the 'errorMessage' prop is truthy.
 *
 * @param {Props} errorMessage - The content to be displayed as the error message.
 * @return {React.ReactElement | null} The rendered error message or null if 'errorMessage' is falsy.
 */
const ErrorMessage = ({ errorMessage }: Props): React.ReactElement | null => {
  if (!errorMessage) {
    return null;
  }

  return (
    <DialogContentText
      padding={1}
      color="error"
      bgcolor="#f3f3f3"
      borderRadius={2}
      textAlign="center"
    >
      {errorMessage}
    </DialogContentText>
  );
};

export default ErrorMessage;
