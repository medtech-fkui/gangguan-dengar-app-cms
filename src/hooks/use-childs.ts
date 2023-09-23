import { Child } from "@/types";
import { useQuery } from "react-query";
import { useAxios } from ".";

export const useChilds = () => {
  const { get } = useAxios();
  const { data, isFetching } = useQuery<Child[], Error>(
    "telingakecilku-childs",
    {
      queryFn: async () => {
        const { data } = await get("/clinician/all/child");
        return data;
      },
      refetchOnWindowFocus: false,
    },
  );

  return {
    data,
    isFetching,
  };
};
