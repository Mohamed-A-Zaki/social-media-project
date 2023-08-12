import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";

import { PostType } from "../../types/Post.type";

/**
 * Renders a Post component.
 *
 * @param {PostType} post - The post object containing the post details.
 * @returns {JSX.Element} - The rendered Post component.
 */
const Post = (post: PostType): JSX.Element => {
  const { id, body, created_at, image, comments_count, author } = post;

  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/post/${id}`)}
      sx={{ boxShadow: 10, borderRadius: 2, my: 3, cursor: "pointer" }}
    >
      <PostHeader created_at={created_at} author={author} />
      <PostContent image={image} body={body} />
      <PostFooter commentsCount={comments_count} />
    </Card>
  );
};

export default Post;
