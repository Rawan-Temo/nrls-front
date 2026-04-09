import { useMutation, useQueryClient } from "@tanstack/react-query";
import ConfirmPopUp from "../../../../../components/popup/ConfirmPopUp";
import axiosInstance from "../../../../../utils/axios";
import endPoints from "../../../../../constant/endPoints";

const Delete = ({ file, setSelectedFile }) => {
  const query = useQueryClient();
  const mutate = useMutation({
    mutationFn: async () =>
      await axiosInstance.delete(`${endPoints.backup}delete/${file}/`),
    onSuccess: () => {
      query.invalidateQueries([endPoints.backup]);
      setSelectedFile(null);
    },
  });

  return (
    <ConfirmPopUp
      isOpen={file}
      onClose={() => setSelectedFile(null)}
      onConfirm={mutate.mutate}
    />
  );
};

export default Delete;
