import axios from 'axios';

const API_KEY = '';
export const searchListApi = () => {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=${API_KEY}&format=json`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};