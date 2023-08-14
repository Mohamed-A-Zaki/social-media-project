import { Stack, Typography } from "@mui/material";

type Props = {
  posts_count: number;
  comments_count: number;
};

const ProfileStats = ({ posts_count, comments_count }: Props) => {
  const renderPostsCount = () => {
    return (
      <Typography>
        <Typography component={"span"} mr={1} fontSize={70} color={"#ccc"}>
          {posts_count}
        </Typography>
        Posts
      </Typography>
    );
  };

  const renderCommentsCount = () => {
    return (
      <Typography>
        <Typography component={"span"} mr={1} fontSize={70} color={"#ccc"}>
          {comments_count}
        </Typography>
        Comments
      </Typography>
    );
  };

  return (
    <Stack height={1} justifyContent={"center"} alignItems={"center"}>
      {renderPostsCount()}
      {renderCommentsCount()}
    </Stack>
  );
};

export default ProfileStats;
