import axios from "axios";

const BASE_URL = `http://3.7.162.104:8082`;

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
