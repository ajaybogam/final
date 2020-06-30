const { default: API } = require("./api.config");

const userApis = {
  // http://IP/user-details
  details: () => API.get("user-details"),
};

export default userApis;
