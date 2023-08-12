import { Avatar, CardHeader } from "@mui/material";

type Props = {
  username: string;
  created_at: string;
};

/**
 * Renders the header component for a post.
 * @param {Props} username - The username of the post author.
 * @return {JSX.Element} The rendered header component.
 */
const PostHeader = ({ username, created_at }: Props): JSX.Element => {
  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "#00f" }} aria-label="recipe">
          {username[0]}
        </Avatar>
      }
      title={username}
      subheader={created_at}
      sx={{ borderBottom: 1, borderColor: "#ccc" }}
    />
  );
};

export default PostHeader;
