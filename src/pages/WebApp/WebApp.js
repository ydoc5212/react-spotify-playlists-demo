// TODO refactor spotify login button logic into separate component 
import React, { useEffect } from 'react';
import SpotifyGetPlaylists from './components/SpotifyGetPlaylists';
import SpotifyGetPlaylist from './components/SpotifyGetPlaylists';

import './WebApp.css';

const CLIENT_ID = "131c63861a804b6c87cef68f5e0caf51";
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URI_AFTER_LOGIN = "http://localhost:3000/webapp";
const SPACE_DELIMITER = "%20";
const SCOPES = ['user-read-currently-playing','user-read-playback-state','playlist-read-private'];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInurl = stringAfterHashtag.split('&')
    // handy way to split up URLs into constituent params (but is it the best way in JS?)
    const paramsSplitUp = paramsInurl.reduce((accumulator, currentValue) => {
        const [key, value] = currentValue.split('=');
        accumulator[key] = value;
        return accumulator;
    }, {})
    return paramsSplitUp;
}

const WebApp = () => {
    useEffect(() => {
        // what is window.location?   
        if (window.location.hash) {
            // destructuring syntax
            const {
                access_token, 
                expires_in, 
                token_type
            } = getReturnedParamsFromSpotifyAuth(window.location.hash);

            // store token in local storage (option to store in firebase, but why?)
            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem('tokenType',token_type);
            localStorage.setItem('expiresIn',expires_in);

        }
    })
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
    }
    return (
        <div className='container'>
            <h1> Hi</h1>
            <button onClick={handleLogin}>Login to Spotify</button>
            <SpotifyGetPlaylists />

        </div>
    );
};

export default WebApp;