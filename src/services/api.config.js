import axios from "axios";

const BASE_URL = `/api`;

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
