import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, Box, Container, Typography } from "@mui/material";

import Post from "../Post/Post";
import { getPost } from "../../store/postsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CommentsList from "./CommentsList";

const PostDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { post, error, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(Number(id)));
  }, [dispatch, id]);

  if (!post.id) {
    return null;
  }

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

  return (
    <Box component={Container} fixed>
      <Post {...post} />

      <Typography variant="h6" fontStyle={"italic"}>
        Comments
      </Typography>

      <CommentsList comments={post.comments} />
    </Box>
  );
};

export default PostDetails;
