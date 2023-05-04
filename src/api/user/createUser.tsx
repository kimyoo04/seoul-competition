import axios from "@api/axiosInstance";
import { IUserForm } from "@type/userForm";

// jwt를 쿠키에 저장 요청
export default async function creatUser(formData: IUserForm) {
  const { gender, age, location, interest } = formData;
  const data = { gender, age, location, interest };
  const response = await axios.post("/user", data);
  return response.data;
}
