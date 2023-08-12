import { CommentType } from "../../types/Post.type";
import { Card, Avatar, Typography, Paper } from "@mui/material";

const Comment = ({ author, body }: CommentType) => {
  const { profile_image, name, username } = author;

  return (
    <Card
      elevation={2}
      sx={{ p: 2, my: 2, ml: 12, display: "flex", gap: 2, bgcolor: "#f2f2f2" }}
    >
      <Avatar
        sx={{ width: 50, height: 50, border: 1, borderColor: "#ccc" }}
        src={typeof profile_image === "string" ? profile_image : undefined}
      />

      <Paper sx={{ p: 2, width: 1 }}>
        <Typography variant="subtitle2" fontSize={17} fontStyle={"italic"}>
          {`${username} - ${name}`}
        </Typography>

        <Paper sx={{ bgcolor: "#fafafa", mt: 2, p: 2 }} elevation={2}>
          {body}
        </Paper>
      </Paper>
    </Card>
  );
};

export default Comment;
