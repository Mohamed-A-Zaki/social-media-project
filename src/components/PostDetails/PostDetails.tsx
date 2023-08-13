import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, Box, Container } from "@mui/material";

import Post from "../Post/Post";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

import { getPost } from "../../store/postsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const PostDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { post, error, loading } = useAppSelector((state) => state.posts);
  const { token } = useAppSelector((state) => state.auth);

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

      {token && <AddComment post_id={Number(id)} />}

      <CommentsList comments={post.comments} />
    </Box>
  );
};

export default PostDetails;
