import Comment from "./Comment";
import { CommentType } from "../../types/Post.type";
import { Alert, Container } from "@mui/material";

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
    return comments.map((comment) => {
      return <Comment key={comment.id} {...comment} />;
    });
  };

  return comments.length === 0 ? renderAlert() : renderComments();
};

export default CommentsList;
