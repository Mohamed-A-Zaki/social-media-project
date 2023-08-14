import { useNavigate } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, CardHeader, IconButton } from "@mui/material";

import { getPost } from "../../store/postsSlice";
import { openEditPostFrom } from "../../store/editPostFromSlice";
import { openConfirmDialog } from "../../store/confirmDialogSlice";

import AuthorType from "../../types/author.type";
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

  const navigate = useNavigate();

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
          navigate(`/post/${postId}`);
          await dispatch(getPost(postId));
          dispatch(openEditPostFrom());
        }}
      >
        <EditIcon />
      </IconButton>
    );
  };

  const renderDeleteIcon = () => {
    if (user?.id !== id) {
      return null;
    }

    return (
      <IconButton
        color="primary"
        onClick={async () => {
          navigate(`/post/${postId}`);
          dispatch(openConfirmDialog());
        }}
      >
        <DeleteIcon />
      </IconButton>
    );
  };

  return (
    <CardHeader
      avatar={renderAvatar()}
      action={
        <>
          {renderDeleteIcon()}
          {renderEditIcon()}
        </>
      }
      title={author.username}
      subheader={created_at}
      sx={{ borderBottom: 1, borderColor: "#ccc" }}
    />
  );
};

export default PostHeader;
