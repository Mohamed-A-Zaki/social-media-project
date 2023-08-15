import { Stack, Typography } from "@mui/material";

type Props = {
  name: string;
  username: string;
  email: string;
};

const renderText = (label: string, value: string) => {
  return (
    <Typography variant="h6">
      {`${label} : `}
      <Typography component={"span"} variant="h6" ml={1} color={"primary.main"}>
        {value}
      </Typography>
    </Typography>
  );
};

const ProfileBasicInfo = ({ name, username, email }: Props): JSX.Element => {
  return (
    <Stack height={1} justifyContent={"space-evenly"}>
      {renderText("name", name)}
      {renderText("username", username)}
      {renderText("email", email)}
    </Stack>
  );
};

export default ProfileBasicInfo;
