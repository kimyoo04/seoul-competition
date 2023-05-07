import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import axios from "@api/axiosInstance";

import { IEducationData } from "@type/educations";
import { TSearchKeyword } from "@type/search";

export const readSimilarByKeyword = async (keyword: TSearchKeyword) => {
  const response = await axios.get("/similar", { params: { keyword } });
  return response.data;
};

export const useReadSimilarByKeyword = (keyword: TSearchKeyword) => {
  return useQuery<IEducationData[], AxiosError>({
    queryKey: ["readSimilarByKeyword", keyword],
    queryFn: () => readSimilarByKeyword(keyword),
  });
};
