import Request from "../request";

export function searchAcquirer(params) {
  return Request({
    method: "get",
    url: "/main/mInstitution/find",
    params: params
  }).then(response => {
    const { status, data } = response;
    if (status === 0) {
      return data;
    }
  });
}
