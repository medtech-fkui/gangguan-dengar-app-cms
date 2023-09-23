import { useQuery } from "react-query";
import { useAxios } from ".";
import { Detection } from "@/types";

export const useDetections = () => {
  const { get } = useAxios();
  const { data, isFetching } = useQuery<Detection[], Error>(
    "telingakecilku-deections",
    {
      queryFn: async () => {
        const { data } = await get("/clinician/all/detection-history");
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
