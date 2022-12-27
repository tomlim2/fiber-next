import axios from "axios";
import keys from "types/keys";

const key = keys.spotifyAccessTokenKey;

export class BaseModel {
  baseUrl: string;

  constructor(url: string = "/") {
    this.baseUrl = url;
  }

  setAccessToken = () => {
    const accessToken = window.localStorage.getItem(key);
    return accessToken;
  };

  setHeader = () => {
    const accessToken = this.setAccessToken();
    if (accessToken) {
      const headers = {
        headers: { Authorization: "Bearer " + accessToken },
      };
      return headers;
    } else {
      return undefined;
    }
  };

  GET = async (
    path: string,
    queryParams: { [key: string]: string | number } = {}
  ) => {
      console.log(this.baseUrl);
      
    try {
      let queryString = "";
      if (Object.keys(queryParams).length > 0) {
        queryString = Object.keys(queryParams).reduce((query, key) => {
          if (queryParams[key]) {
            query = query + `&${key}=${queryParams[key]}`;
          }
          return query;
        }, `?`);
      }

      const response = await axios.get(
        this.baseUrl + path + queryString,
        this.setHeader()
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}

export default BaseModel;
