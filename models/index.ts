import SpotifyModel from "./spotifyModel";
import ExpsModel from "./expsModel";

export class modelManager {
  spotify: SpotifyModel;
  exps: ExpsModel;

  constructor() {
    this.exps = new ExpsModel();
    this.spotify = new SpotifyModel("https://api.spotify.com/v1/");
  }
}

const useModel = () => new modelManager();

export default useModel;
