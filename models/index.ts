import SpotifyModel from "./spotifyModel";
import ExpsModel from "./expsModel";

export class models {
  spotify: SpotifyModel;
  exps: ExpsModel;

  constructor() {
    this.exps = new ExpsModel();
    this.spotify = new SpotifyModel("https://api.spotify.com/v1/");
  }
}

const modelManager = () => new models();

export default modelManager;
