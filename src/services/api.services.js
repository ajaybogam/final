import productApis from "./product.services";
import userApis from "./user.services";

const ApiServices = {
  instrument: productApis,
  user: userApis,
};

export default ApiServices;
