import { User } from "@/types";
import { useQuery } from "react-query";
import { useAxios } from ".";

export const useUsers = () => {
  const { get } = useAxios();
  const { data, isFetching } = useQuery<User[], Error>("telingakecilku-users", {
    queryFn: async () => {
      const { data } = await get("/clinician/all/user");
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isFetching,
  };
};
