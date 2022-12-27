import BaseModel from "./class/model";
import keys from "types/keys";

const key = keys.spotifyAccessTokenKey;

export class SpotifyModel extends BaseModel {
  getUserData = async () => {
    const response = await this.GET("me");

    return response;
  };

  login = async () => {
    const scopes = ["user-read-currently-playing", "user-read-playback-state"];
    const url = `${process.env.NEXT_PUBLIC_SPOTIFY_AUTH_ENDPOINT}?client_id=${
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    }&redirect_uri=${
      process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI
    }&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
    console.log(url);

    return window.location.replace(url);
  };
}

export default SpotifyModel;
