import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL
});

export default instance;
