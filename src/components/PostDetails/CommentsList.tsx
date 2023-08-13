import Comment from "./Comment";
import CommentType from "../../types/comment.type";
import { Alert, Container, Typography } from "@mui/material";

type Props = {
  comments: CommentType[];
};

const CommentsList = ({ comments }: Props) => {
  const renderAlert = () => {
    return (
      <Container fixed sx={{ my: 2 }}>
        <Alert severity="info">There is no comments...</Alert>
      </Container>
    );
  };

  const renderComments = () => {
    return (
      <>
        <Typography variant="h6" fontStyle={"italic"}>
          Comments
        </Typography>

        {comments.map((comment) => {
          return <Comment key={comment.id} {...comment} />;
        })}
      </>
    );
  };

  return comments.length === 0 ? renderAlert() : renderComments();
};

export default CommentsList;
