import { Avatar, CardHeader } from "@mui/material";
import { AuthorType } from "../../types/Post.type";

type Props = {
  created_at: string;
  author: AuthorType;
};

const PostHeader = ({ created_at, author }: Props): JSX.Element => {
  const renderAvatar = () => {
    return (
      <Avatar
        sx={{ bgcolor: "#00f" }}
        src={
          typeof author.profile_image === "string"
            ? author.profile_image
            : undefined
        }
        aria-label="profile_image"
      />
    );
  };

  return (
    <CardHeader
      avatar={renderAvatar()}
      title={author.username}
      subheader={created_at}
      sx={{ borderBottom: 1, borderColor: "#ccc" }}
    />
  );
};

export default PostHeader;
