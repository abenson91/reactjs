import axios from "axios";

const KEY = "AIzaSyDMYfq95Mzn2AhPkLf_TXDxvtGAt73nybU";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
