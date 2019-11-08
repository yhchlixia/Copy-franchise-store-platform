import axios from "axios";
import sha1 from "js-sha1";
import qs from "qs";

const accessTokenKey = "access_token";
const authKey = "Authorization";
let jwt = "";

axios.defaults.headers.common["X-Platform"] = "everonet";

const service = axios.create({
  baseURL: "/",
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    const cfg = config;
    const token = jwt || sessionStorage.getItem(accessTokenKey);
    cfg.headers[authKey] = token ? `Bearer ${token}` : "";
    if (cfg.method === "get" && /^\/main/.test(cfg.url)) {
      cfg.headers["If-Modified-Since"] = "Mon, 26 Jul 1997 05:00:00 GMT";
    }
    const timestamp = new Date().getTime();
    const queryString = qs.stringify(cfg.params);
    cfg.fingerprint = sha1(
      `${timestamp}${cfg.url}${queryString}${Math.random()}`
    );
    return cfg;
  },
  error => Promise.reject(error)
);

service.interceptors.response.use(
  response => {
    if (response.headers.access_token) {
      sessionStorage.setItem("access_token", response.headers.access_token);
    }
    return response.data;
  },
  error => Promise.reject(error)
);

export default service;
