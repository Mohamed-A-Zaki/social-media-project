import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Container, Typography } from "@mui/material";

import UserPosts from "./UserPosts";
import ProfileHeader from "./ProfileHeader";

import { getUser, getUserPosts } from "../../store/profileSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Profile = () => {
  const { userId } = useParams();

  const dispatch = useAppDispatch();
  const { posts, user } = useAppSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getUser(Number(userId)));
    dispatch(getUserPosts(Number(userId)));
  }, [dispatch, userId]);

  return (
    <Box component={Container} fixed>
      <Typography variant="h4" mt={3}>
        Profile
      </Typography>

      <ProfileHeader user={user} />

      <Typography variant="h4" mt={3}>
        Posts
      </Typography>

      <UserPosts posts={posts} />
    </Box>
  );
};

export default Profile;
