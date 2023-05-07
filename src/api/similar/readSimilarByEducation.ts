import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import axios from "@api/axiosInstance";

import { IEducationData, TEducationId } from "@type/educations";

export const readSimilarByEducationId = async (educationId: TEducationId) => {
  const response = await axios.get("/similar", { params: { educationId } });
  return response.data;
};

export const useReadSimilarByEducationId = (educationId: TEducationId) => {
  return useQuery<IEducationData[], AxiosError>({
    queryKey: ["readSimilarByEducationId", educationId],
    queryFn: () => readSimilarByEducationId(educationId),
  });
};
