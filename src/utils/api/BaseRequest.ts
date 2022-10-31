import axios from "axios";
import { toast } from "react-toastify";
import { SERVER_ADDRESS } from "src/constants/configs";

const TIMEOUT_DELAY = 100000;

export default async function BaseRequest(
  path: string,
  method: string,
  params?: object,
  data?: object,
  otherOptions?: object,
  getCancelToken?: any
) {
  if (!window.navigator.onLine) {
    toast.error("check your internet connection!");
    return Promise.reject({ isTimeout: false, error: 12029 });
  }
  let timeout = null;
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  getCancelToken && getCancelToken(source);
  timeout = setTimeout(() => {
    source.cancel();
  }, TIMEOUT_DELAY);
  const API = SERVER_ADDRESS;
  try {
    const response = await axios({
      url: `${API}${path}`,
      method: method === "post" && data ? "POST" : method,     
      params: params,
      cancelToken: source.token,
      data,
      ...otherOptions,
    });

    if (response.status >= 200 && response.status < 300) {
      if (timeout) clearTimeout(timeout);
      return response.data;
    } else {
      if (timeout) clearTimeout(timeout);
      toast.error("server error");
      return Promise.reject({ isTimeout: false, error: 101 });
    }
  } catch (err: any) {
    if (timeout) clearTimeout(timeout);
    toast.error("server error");
    return Promise.reject({
      isTimeout: axios.isCancel(err),
      response: err,
      status: err.response && err.response.status,
    });
  }
}
