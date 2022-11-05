import React, { useEffect, useState } from 'react';
import axios from "axios";

import './SpotifyGetPlaylists.css'

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"

const SpotifyGetPlaylists = () => {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

    // get token from local storage when we open webapp
    // (i hope we dont need this on every separate component...)
    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem('accessToken'))
        }
    }, []);

    const handleGetPlaylists = () => {
        console.log(`about to request playlists w this token: ${token}`)
        axios.get(PLAYLISTS_ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then(response => setData(response.data)).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <button onClick={handleGetPlaylists}>Get Playlists</button>;
            {/* optional chaining syntax!! love this */}
            {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
        </>
    );
}

export default SpotifyGetPlaylists;