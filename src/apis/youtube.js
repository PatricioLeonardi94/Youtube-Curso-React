import axios from 'axios';

const KEY = 'AIzaSyBr_E_ubyjSwUXvZgF3MUsvwRU93ZoLIEM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});