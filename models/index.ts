import SpotifyModel from "./spotifyModel";

class modelManager {
    spotify: SpotifyModel
    constructor(){
        this.spotify = new SpotifyModel()
    }
}

const useModel = () => new modelManager

export default useModel