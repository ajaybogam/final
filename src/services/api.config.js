import axios from "axios";

const BASE_URL = `http://52.73.189.181`;

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
