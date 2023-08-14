import { Card } from "@mui/material";
import PostType from "../../types/Post.type";

import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";

/**
 * Renders a Post component.
 *
 * @param {PostType} post - The post object containing the post details.
 * @returns {JSX.Element} - The rendered Post component.
 */
const Post = (post: PostType): JSX.Element => {
  const { id, body, created_at, image, comments_count, author, title } = post;

  return (
    <Card sx={{ boxShadow: 10, borderRadius: 2, my: 3 }}>
      <PostHeader created_at={created_at} author={author} postId={id} />
      <PostContent id={id} image={image} body={body} title={title} />
      <PostFooter commentsCount={comments_count} />
    </Card>
  );
};

export default Post;
