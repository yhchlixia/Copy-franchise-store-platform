import Request from "../request";

export function tradeList(data) {
  return Request({
    url: "/main/trade/query",
    method: "get",
    params: data
  });
}

export function tradeStaticList(data) {
  return Request({
    url: "/main/trade/stat",
    method: "get",
    params: data
  });
}
