import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import axios from "@api/axiosInstance";

import { IEducationData, TEducationId } from "@type/educations";

export const readSimilarEducationsById = async (educationId: TEducationId) => {
  const response = await axios.get("/educations/similar", {
    params: { educationId },
  });
  return response.data;
};

export const useReadSimilarEducationsById = (educationId: TEducationId) => {
  return useQuery<IEducationData[], AxiosError>({
    queryKey: ["readSimilarEducationsById", educationId],
    queryFn: () => readSimilarEducationsById(educationId),
  });
};
