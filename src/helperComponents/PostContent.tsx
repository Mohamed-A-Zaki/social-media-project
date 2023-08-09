import { CardContent, CardMedia, Typography } from "@mui/material";

interface PostContentProps {
  image: string;
  body: string;
}

/**
 * Renders the content of a post.
 *
 * @param {PostContentProps} props - The props object containing the image and body of the post.
 * @return {JSX.Element} The rendered post content.
 */
const PostContent = ({ image, body }: PostContentProps): JSX.Element => {
  return (
    <CardContent sx={{ borderBottom: 1, borderColor: "#ccc" }}>
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

      <Typography mt={2}>{body}</Typography>
    </CardContent>
  );
};

export default PostContent;
