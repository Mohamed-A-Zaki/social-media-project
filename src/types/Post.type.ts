type PostType = {
  id: number;
  title: string;
  body: string;
  author: {
    id: number;
    username: string;
    name: string;
  };
  image: string;
  tags: [];
  created_at: string;
  comments_count: number;
};

export default PostType;
