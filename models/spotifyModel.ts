import axios from "axios"
import keys from 'types/keys'

const key = keys.spotifyAccessTokenKey

export class SpotifyModel {
    baseUrl: string

    constructor() {
        this.baseUrl = 'https://api.spotify.com/v1/'
    }

    setAccessToken = () => {
        const accessToken = window.localStorage.getItem(key)
        return accessToken
    }

    setHeader = () => {
        const accessToken = this.setAccessToken()
        if (accessToken) {
            const headers = {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            }
            return headers
        } else {
            return undefined
        }
    }

    GET = async (path: string) => {
        try {
            const response = await axios.get(this.baseUrl + path, this.setHeader())
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    getUserData = async () => {
        const response = await this.GET('me')

        return response
    }

    login = async () => {
        const scopes = [
            "user-read-currently-playing",
            "user-read-playback-state",
        ];
        const url = `${process.env.NEXT_PUBLIC_SPOTIFY_AUTH_ENDPOINT}?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
        console.log(url);
        
        return window.location.replace(url);
    }
}

export default SpotifyModel