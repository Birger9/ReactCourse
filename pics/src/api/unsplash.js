import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID B8QvCJ1Xhj-LCd_cnoH3si9q2_s2fFZS0GaBcam8Jfs"
    } 
});