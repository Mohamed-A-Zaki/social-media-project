import CommentType from "../../types/comment.type";
import { Avatar, Typography, Stack } from "@mui/material";

const Comment = ({ author, body }: CommentType) => {
  const { profile_image, name, username, email } = author;

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ p: 2, my: 2, ml: 12, bgcolor: "#f2f2f2", borderRadius: 2 }}
    >
      <Avatar
        sx={{ width: 50, height: 50, border: 1, borderColor: "#ccc" }}
        src={typeof profile_image === "string" ? profile_image : undefined}
      />

      <Stack direction="column" bgcolor="#fff" borderRadius={2} width={1} p={2}>
        <Typography variant="subtitle2" fontSize={17}>
          {`${username} - ${name}`}
        </Typography>

        <Typography variant="body2" color={"text.secondary"}>
          {email}
        </Typography>

        <Typography bgcolor="#fafafa" mt={2} p={2} borderRadius={2}>
          {body}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Comment;
