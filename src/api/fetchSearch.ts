import axios from "@api/axiosInstance";
import { TSearchCategory } from "@type/search";

export const fetchSearch = async (
  searchCategory: TSearchCategory,
  page: number,
  name: string
) => {
  if (name == "") return;

  const response = await axios.get(
    `/${searchCategory}?page=${page}&name=${name}`
  );

  return response.data;
};
