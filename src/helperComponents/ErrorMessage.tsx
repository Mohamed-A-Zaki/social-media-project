import { DialogContentText } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: Props) => {
  return (
    <DialogContentText
      padding={1}
      color="error"
      bgcolor="#f3f3f3"
      borderRadius={2}
      textAlign="center"
    >
      {children}
    </DialogContentText>
  );
};

export default ErrorMessage;
