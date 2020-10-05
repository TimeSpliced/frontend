import axios from "axios";

const instance = axios.create({
  baseURL: "https://ci0pz8ou28.execute-api.us-east-1.amazonaws.com",
});

export default instance;
