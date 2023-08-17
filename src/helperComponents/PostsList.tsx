import { useEffect } from "react";
import { Alert, Box, Container } from "@mui/material";

import Post from "../components/Post/Post";
import { getPosts, increasePage } from "../store/postsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const PostsList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { posts, loading, error, page } = useAppSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  useEffect(() => {
    const listenFun = () => {
      const condition =
        window.scrollY + window.innerHeight > document.body.scrollHeight - 100;

      if (condition) {
        dispatch(increasePage());
      }
    };

    window.addEventListener("scroll", listenFun);

    return () => window.removeEventListener("scroll", listenFun);
  }, [dispatch]);

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

      {loading && (
        <Container
          fixed
          sx={{ mt: 2, mb: 10, textAlign: "center", fontSize: 25 }}
        >
          Loading...
        </Container>
      )}
    </Box>
  );
};

export default PostsList;
