import axios from "axios";
import qs from "qs";
import uuid from "uuid/v4";
import store from "@/store";

axios.defaults.baseURL = "http://192.168.2.106:8080";
axios.defaults.headers.common["Authorization"] =
  store.state.user && store.state.user.token;

const api = {
  post(url, data) {
    return axios.post(url, qs.stringify(data));
  },
  get(url, params = null) {
    return axios.get(url, {
      params: params
    });
  }
};

export default api;
