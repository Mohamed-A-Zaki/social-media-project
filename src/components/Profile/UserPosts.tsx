import Post from "../Post/Post";
import PostType from "../../types/Post.type";
import { useAppSelector } from "../../store/hooks";
import { Alert, Container } from "@mui/material";

type Props = {
  posts: PostType[];
};

const UserPosts = ({ posts }: Props) => {
  const { posts_error } = useAppSelector((state) => state.profile);

  if (posts_error) {
    return (
      <Container fixed sx={{ my: 2 }}>
        <Alert severity="error">{posts_error}</Alert>
      </Container>
    );
  }

  return posts.map((post) => {
    return <Post key={post.id} {...post} />;
  });
};

export default UserPosts;
