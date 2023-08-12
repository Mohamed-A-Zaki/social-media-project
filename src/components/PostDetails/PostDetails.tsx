import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  return <>PostDetails - {id}</>;
};

export default PostDetails;
