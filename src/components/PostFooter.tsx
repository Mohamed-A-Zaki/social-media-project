import { CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";

interface PostFooterProps {
  commentsCount: number;
}

/**
 * Renders the footer component for a post, displaying the number of comments.
 *
 * @param {number} commentsCount - The number of comments for the post.
 * @returns {JSX.Element} The rendered footer component.
 */
const PostFooter = ({ commentsCount }: PostFooterProps): JSX.Element => {
  return (
    <CardActions sx={{ marginLeft: 1, gap: 1, paddingTop: 2 }}>
      <ModeIcon />
      <Typography>({commentsCount}) Comments</Typography>
    </CardActions>
  );
};

export default PostFooter;
