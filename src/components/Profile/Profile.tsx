import { Box, Container, Typography } from "@mui/material";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
  return (
    <Box component={Container} fixed>
      <Typography variant="h4" mt={3}>
        Profile
      </Typography>

      <ProfileHeader />
    </Box>
  );
};

export default Profile;
