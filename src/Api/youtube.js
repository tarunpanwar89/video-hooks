import axios from "axios";
const KEY= 'AIzaSyCeJeH1y61Zj4W7zaxjrixyaKtIxrhCuoY';
export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params :{
            part: 'snippet',
            maxResults : 5,
            type: 'video',
            key:KEY
        }
    }
);
