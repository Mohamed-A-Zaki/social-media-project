import { Grid } from "@mui/material";
import UserType from "../../types/user.type";

import ProfileImage from "./ProfileImage";
import ProfileStats from "./ProfileStats";
import ProfileBasicInfo from "./ProfileBasicInfo";

const ProfileHeader = () => {
  const user: UserType = JSON.parse(localStorage.getItem("user") as string);

  return (
    <Grid container p={2} my={3} width={1} boxShadow={3} borderRadius={3}>
      <Grid item xs={12} md={4} p={2}>
        <ProfileImage profile_image={user.profile_image} />
      </Grid>

      <Grid item xs={12} md={4} p={2}>
        <ProfileBasicInfo
          name={user.name}
          email={user.email}
          username={user.username}
        />
      </Grid>

      <Grid item xs={12} md={4} p={2}>
        <ProfileStats
          posts_count={user.posts_count}
          comments_count={user.comments_count}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
