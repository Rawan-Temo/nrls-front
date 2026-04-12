import { useQuery } from "@tanstack/react-query";
import endPoints from "./../../../../../constant/endPoints";
import axiosInstance from "../../../../../utils/axios";
const Statistics = () => {
  const { data } = useQuery({
    queryKey: [endPoints.statistics],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endPoints.statistics);
      return data?.data || null;
    },
  });

  return <div></div>;
};

export default Statistics;
