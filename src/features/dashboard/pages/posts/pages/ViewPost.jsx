import { useParams } from "react-router";
import APIClient from "../../../../../utils/ApiClient";
import { useQuery } from "@tanstack/react-query";
import endPoints from "../../../../../constant/endPoints";
import Skeleton from "../../../../../components/skeleton/Skeleton";
import HandleError from "./../../../../../components/error/HandleError";

const api = new APIClient(endPoints.posts);

const ViewPost = () => {
  const { id } = useParams();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [endPoints.posts, id],
    queryFn: () => api.getOne(id),
  });

  if (isLoading) return <Skeleton height="400px" />;

  if (error) return <HandleError error={error} refetch={refetch} />;

  return <div></div>;
};

export default ViewPost;
