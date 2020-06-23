import axios from "axios";

const BASE_URL = `http://52.73.189.181`;

const API = axios.create({
  baseURL: BASE_URL,
});

const product = {
  apply: (payload) => API.post("applyProduct", payload),
};

<<<<<<< HEAD
export default {
  product,
};
=======
const ApiServices = {
    product
}

export default ApiServices
>>>>>>> 8ff8c7e95d85c0e49747eeed8c579552c9d83e1e
