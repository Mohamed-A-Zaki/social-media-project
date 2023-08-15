import CommentType from "../../types/comment.type";
import { Avatar, Typography, Stack } from "@mui/material";

const Comment = ({ author, body }: CommentType) => {
  const { profile_image, name, username, email } = author;
  const isProfileImageString = typeof profile_image === "string";

  return (
    <Stack direction="row" spacing={2} sx={commentContainerStyles}>
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

const commentContainerStyles = {
  p: 2,
  my: 2,
  ml: 12,
  bgcolor: "#f2f2f2",
  borderRadius: 2,
};

const avatarStyles = {
  width: 50,
  height: 50,
  border: 1,
  borderColor: "#ccc",
};

const authorInfoContainerStyles = {
  bgcolor: "#fff",
  width: 1,
  p: 2,
  borderRadius: 2,
};

const usernameStyles = {
  fontSize: 17,
};

const emailStyles = {
  color: "text.secondary",
};

const bodyStyles = {
  bgcolor: "#fafafa",
  mt: 2,
  p: 2,
  borderRadius: 2,
};

export default Comment;
