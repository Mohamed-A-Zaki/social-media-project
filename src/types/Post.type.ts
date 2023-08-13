import TagType from "./tag.type";
import AuthorType from "./author.type";
import CommentType from "./comment.type";

export type PostType = {
  id: number;
  title: string;
  body: string;
  author: AuthorType;
  image: string;
  tags: TagType[];
  created_at: string;
  comments_count: number;
  comments: CommentType[];
};
