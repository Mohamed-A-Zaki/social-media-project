import { Card } from "@mui/material";
import PostType from "../types/Post.type";

import PostFooter from "./PostFooter";
import PostHeader from "../helperComponents/PostHeader";
import PostContent from "../helperComponents/PostContent";

/**
 * Renders a Post component.
 *
 * @param {PostType} post - The post object containing the post details.
 * @returns {JSX.Element} - The rendered Post component.
 */
const Post = (post: PostType): JSX.Element => {
  const { body, created_at, image, comments_count, author } = post;

  return (
    <Card sx={{ boxShadow: 10, borderRadius: 2, my: 3 }}>
      <PostHeader created_at={created_at} username={author.username} />
      <PostContent image={image} body={body} />
      <PostFooter commentsCount={comments_count} />
    </Card>
  );
};

export default Post;
