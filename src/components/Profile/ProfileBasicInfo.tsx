import { Stack, Typography } from "@mui/material";

type Props = {
  name: string;
  username: string;
  email: string;
};

const ProfileBasicInfo = ({ name, username, email }: Props) => {
  const renderName = () => {
    return (
      <Typography variant="h6">
        name :
        <Typography
          component={"span"}
          variant="h6"
          ml={1}
          color={"primary.main"}
        >
          {name}
        </Typography>
      </Typography>
    );
  };

  const renderUserName = () => {
    return (
      <Typography variant="h6">
        username :
        <Typography
          component={"span"}
          variant="h6"
          ml={1}
          color={"primary.main"}
        >
          {username}
        </Typography>
      </Typography>
    );
  };

  const renderEmail = () => {
    return (
      <Typography variant="h6">
        email :
        <Typography
          component={"span"}
          variant="h6"
          ml={1}
          color={"primary.main"}
        >
          {email}
        </Typography>
      </Typography>
    );
  };

  return (
    <Stack height={1} justifyContent={"space-evenly"}>
      {renderName()}
      {renderUserName()}
      {renderEmail()}
    </Stack>
  );
};

export default ProfileBasicInfo;
