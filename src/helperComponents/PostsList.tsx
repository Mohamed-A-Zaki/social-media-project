import { useEffect } from "react";
import { Alert, Box, Container } from "@mui/material";

import Post from "../components/Post/Post";
import { getPosts } from "../store/postsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const PostsList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <Container fixed sx={{ my: 2, textAlign: "center", fontSize: 25 }}>
        Loading...
      </Container>
    );
  }

  if (error) {
    return (
      <Container fixed sx={{ my: 2 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (posts.length === 0) {
    return (
      <Container fixed sx={{ my: 2 }}>
        <Alert severity="info">There is no posts...</Alert>
      </Container>
    );
  }

  return (
    <Box component={Container} fixed>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Box>
  );
};

export default PostsList;
