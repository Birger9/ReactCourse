import axios from "axios";

const KEY = "AIzaSyAW1ECIaHJc8qXTHO8__CEAd5gSht-pjhc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});