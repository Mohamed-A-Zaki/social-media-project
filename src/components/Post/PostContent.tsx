import { useNavigate } from "react-router-dom";
import { CardContent, CardMedia, Typography } from "@mui/material";

interface PostContentProps {
  id: number;
  image: string;
  body: string;
  title: string;
}

/**
 * Renders the content of a post.
 *
 * @param {PostContentProps} props - The props object containing the image and body of the post.
 * @return {JSX.Element} The rendered post content.
 */
const PostContent = (props: PostContentProps): JSX.Element => {
  const { id, image, body, title } = props;

  const navigate = useNavigate();

  return (
    <CardContent
      onClick={() => navigate(`/post/${id}`)}
      sx={{ borderBottom: 1, borderColor: "#ccc", cursor: "pointer" }}
    >
      <CardMedia
        component={"img"}
        height={300}
        image={
          typeof image === "string"
            ? image
            : "http://tarmeezacademy.com/images/posts/QyMtYcStFdYBydB.jpg"
        }
        sx={{ borderRadius: 2, border: 1, borderColor: "#ccc" }}
      />

      <Typography mt={2} variant="h6" color={"success.main"}>
        {title}
      </Typography>

      <Typography mt={2}>{body}</Typography>
    </CardContent>
  );
};

export default PostContent;
