import { useNavigate } from "react-router-dom";
import CommentType from "../../types/comment.type";
import { Avatar, Typography, Stack, SxProps, Theme } from "@mui/material";

const Comment = ({ author, body }: CommentType) => {
  const navigate = useNavigate();

  const { profile_image, name, username, email } = author;
  const isProfileImageString = typeof profile_image === "string";

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={commentContainerStyles}
      onClick={() => navigate(`/profile/${author.id}`)}
    >
      <Avatar
        sx={avatarStyles}
        src={isProfileImageString ? profile_image : undefined}
      />

      <Stack direction="column" sx={authorInfoContainerStyles}>
        <Typography variant="subtitle2" sx={usernameStyles}>
          {`${username} - ( ${name} )`}
        </Typography>

        <Typography variant="body2" sx={emailStyles}>
          {email}
        </Typography>

        <Typography sx={bodyStyles}>{body}</Typography>
      </Stack>
    </Stack>
  );
};

const commentContainerStyles: SxProps<Theme> = {
  p: 2,
  my: 2,
  ml: 12,
  bgcolor: "#f2f2f2",
  borderRadius: 2,
  cursor: "pointer",
};

const avatarStyles: SxProps<Theme> = {
  width: 50,
  height: 50,
  border: 1,
  borderColor: "#ccc",
};

const authorInfoContainerStyles: SxProps<Theme> = {
  bgcolor: "#fff",
  width: 1,
  p: 2,
  borderRadius: 2,
};

const usernameStyles: SxProps<Theme> = {
  fontSize: 17,
};

const emailStyles: SxProps<Theme> = {
  color: "text.secondary",
};

const bodyStyles: SxProps<Theme> = {
  bgcolor: "#fafafa",
  mt: 2,
  p: 2,
  borderRadius: 2,
};

export default Comment;
