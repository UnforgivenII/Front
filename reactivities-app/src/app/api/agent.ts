import axios, { Axios, AxiosResponse } from "axios";
import { List } from "semantic-ui-react";
import { Activity } from "../models/activity";

axios.defaults.baseURL = "https://localhost:7142/api";

const responseBody = <T> (Response: AxiosResponse<T>) => Response.data;

const requests = {
  get:  <T> (url: string) => axios.get <T> (url).then(responseBody),
  post: <T>  (url: string, body: {}) => axios.post <T> (url, body).then(responseBody),
  put:  <T> (url: string, body: {}) => axios.put <T> (url, body).then(responseBody),
  del: <T>  (url: string) => axios.delete <T> (url).then(responseBody),
};

const Activities = {
  List: () => requests.get<Activity[]>("/activities"),
};

const agent = {
  Activities,
};

export default agent;
