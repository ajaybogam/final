import API from "./api.config";

const productApis = {
  apply: (payload) => API.post("applyProduct", payload),

  // `http://52.73.189.181/products` | METHOD
  getProducts: (userId) => API.get(`products?user=${userId}`),

  inquiries:(payload)=>API.post('inquiries',payload),

  faqs: () => API.get("webfaqs"),
};

export default productApis;
