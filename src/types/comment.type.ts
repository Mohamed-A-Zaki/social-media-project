import AuthorType from "./author.type";

type CommentType = {
  id: number;
  body: string;
  author: AuthorType;
};

export default CommentType;
