import axios from "@api/axiosInstance";
import { IUserForm } from "@type/userForm";

export default async function postUser(formData: IUserForm) {
  const { gender, age, location, interest } = formData;
  const data = { gender, age, location, interest };
  const response = await axios.post("/user", data);
  return response.data;
}
