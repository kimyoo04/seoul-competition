import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: API_URL, // 도메인 허용
  withCredentials: true, // CORS 허용
  headers: {
    "Content-Type": "application/json", // json
    "Access-Control-Allow-Origin": API_URL, // 허용할 도메인 주소
    "Access-Control-Allow-Credentials": "true", // 허용할 도메인에서 쿠키 사용 가능
  },
});

export default instance;
