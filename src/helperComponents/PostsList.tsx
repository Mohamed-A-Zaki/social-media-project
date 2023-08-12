import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";

import Post from "../components/Post/Post";
import PostType from "../types/Post.type";

/**
 * Renders a list of posts from the API.
 *
 * @return {JSX.Element} The JSX element representing the posts list.
 */
const PostsList = (): JSX.Element => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = "https://tarmeezacademy.com/api/v1/posts";
        const response = await axios.get(url);
        setPosts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Box component={Container} fixed>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Box>
  );
};

export default PostsList;
