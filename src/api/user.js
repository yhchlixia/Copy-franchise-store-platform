import Request from "../request";

export function toLogin(user) {
  return Request({
    url: "/main/login",
    method: "post",
    data: user
  });
}
