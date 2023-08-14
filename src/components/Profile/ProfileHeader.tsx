import { Alert, Container, Grid } from "@mui/material";
import UserType from "../../types/user.type";

import ProfileImage from "./ProfileImage";
import ProfileStats from "./ProfileStats";
import ProfileBasicInfo from "./ProfileBasicInfo";
import { useAppSelector } from "../../store/hooks";

type Props = {
  user: UserType | null;
};

const ProfileHeader = ({ user }: Props) => {
  const { user_error } = useAppSelector((state) => state.profile);

  if (user_error) {
    return (
      <Container fixed sx={{ my: 2 }}>
        <Alert severity="error">{user_error}</Alert>
      </Container>
    );
  }

  return (
    <Grid
      container
      p={2}
      my={3}
      width={1}
      boxShadow={3}
      borderRadius={3}
      textAlign={{ xs: "center", md: "left" }}
    >
      <Grid item xs={12} md={3} p={2}>
        <ProfileImage profile_image={user?.profile_image} />
      </Grid>

      <Grid item xs={12} md={5} p={2}>
        <ProfileBasicInfo
          name={user?.name as string}
          email={user?.email as string}
          username={user?.username as string}
        />
      </Grid>

      <Grid item xs={12} md={4} p={2}>
        <ProfileStats
          posts_count={user?.posts_count as number}
          comments_count={user?.comments_count as number}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
