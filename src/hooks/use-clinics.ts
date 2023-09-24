import { Clinic } from "@/types";
import { useQuery } from "react-query";
import { useAxios } from ".";

export const useClinics = () => {
  const { get } = useAxios();
  const { data, isFetching, refetch } = useQuery<Clinic[], Error>(
    "telingakecilku-clinics",
    {
      queryFn: async () => {
        const { data } = await get("/clinician/all/clinic");
        console.log(data);
        return data;
      },
      refetchOnWindowFocus: false,
    },
  );

  return {
    data,
    isFetching,
    refetch,
  };
};
