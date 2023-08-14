import { Box } from "@mui/material";

type Props = {
  profile_image: string | undefined;
};

const ProfileImage = ({ profile_image }: Props) => {
  return (
    <Box
      component={"img"}
      alt="profile"
      src={profile_image}
      width={250}
      height={250}
      maxWidth={"100%"}
      borderRadius={"50%"}
      p={0.5}
      border={1}
      borderColor={"#ccc"}
    />
  );
};

export default ProfileImage;
