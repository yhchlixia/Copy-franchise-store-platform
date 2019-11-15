import Request from "../request";

export function sendRequest(filter = {}, keyword = "", limit = 6) {
  return Request({
    method: "POST",
    url: "/main/list",
    params: {
      kw: keyword,
      limit
    },
    data: filter,
    ignoreLoadingBar: true // 不显示 loading bar
  }).then(
    response => {
      if (response !== null) {
        const data = response;
        return data.slice(0);
      }
      // TODO 处理406错误等

      return this.$log.error(
        "sendRequest for kv list got error: ",
        response.status,
        response.data
      );
    },
    error => this.$log.error("sendRequest for kv list got error: ", error)
  );
}
