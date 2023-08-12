export type AuthorType = {
  id: number;
  username: string;
  name: string;
  email: string;
  profile_image: string;
};

export type TagType = {
  name: string;
  arabic_name: string;
  description: string;
};

export type CommentType = {
  id: number;
  body: string;
  author: AuthorType;
};

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
