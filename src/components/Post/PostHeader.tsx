import EditIcon from "@mui/icons-material/Edit";
import { Avatar, CardHeader, IconButton } from "@mui/material";

import AuthorType from "../../types/author.type";
import { getPost } from "../../store/postsSlice";

import { openEditPostFrom } from "../../store/editPostFromSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type Props = {
  postId: number;
  created_at: string;
  author: AuthorType;
};

const PostHeader = ({ postId, created_at, author }: Props): JSX.Element => {
  const { profile_image, id } = author;

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const renderAvatar = () => {
    return (
      <Avatar
        sx={{ bgcolor: "#00f" }}
        aria-label="profile_image"
        src={typeof profile_image === "string" ? profile_image : undefined}
      />
    );
  };

  const renderEditIcon = () => {
    if (user?.id !== id) {
      return null;
    }

    return (
      <IconButton
        color="primary"
        onClick={async () => {
          await dispatch(getPost(postId));
          dispatch(openEditPostFrom());
        }}
      >
        <EditIcon />
      </IconButton>
    );
  };

  return (
    <CardHeader
      avatar={renderAvatar()}
      action={renderEditIcon()}
      title={author.username}
      subheader={created_at}
      sx={{ borderBottom: 1, borderColor: "#ccc" }}
    />
  );
};

export default PostHeader;
