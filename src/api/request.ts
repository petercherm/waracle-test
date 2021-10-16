import axios, { AxiosRequestHeaders } from "axios";
import axiosRetry, { exponentialDelay } from "axios-retry";
import { HttpMethod } from "../models/api";

/* NOTE: having a class here is useful as, e.g. in real-life projects it's often
   necessery to pass some "tune" the requests with attributes specific for certain endpoints */
export class Request {
  constructor() {
    axiosRetry(axios, { retries: 3, retryDelay: exponentialDelay });
  }

  public async get(url: string): Promise<unknown> {
    return await axios
      .get(url, this.getRequestParams(HttpMethod.GET))
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public async post(url: string, data = {}): Promise<unknown> {
    return await axios
      .post(url, data, this.getRequestParams(HttpMethod.POST))
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public async put(url: string, data = {}): Promise<unknown> {
    return await axios
      .put(url, data, this.getRequestParams(HttpMethod.PUT))
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  public async delete(url: string): Promise<unknown> {
    return await axios
      .delete(url, this.getRequestParams(HttpMethod.DELETE))
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  private async handleResponse(response: any): Promise<unknown> {
    const { status } = response;
    const isSuccess: boolean = status >= 200 && status < 300;
    if (isSuccess) {
      return response.data;
    }

    return Promise.reject({
      errorCode: response.status,
      errorText: response.statusText
    });
  }

  private async handleError(error: Response) {
    return Promise.reject(error);
  }

  private getRequestParams(method: HttpMethod) {
    return {
      method,
      mode: "cors" as RequestMode,
      cache: "no-cache" as RequestCache,
      credentials: "same-origin" as RequestCredentials,
      redirect: "follow" as RequestRedirect,
      referrer: "no-referrer",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": process.env.REACT_APP_API_TOKEN
      } as AxiosRequestHeaders // required because `x-api-key` is a non-standard header
    };
  }
}
