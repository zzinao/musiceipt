import axios from 'axios';

const API_KEY = 'cee47cb2e2c673012ee70b97b8e2bdcb';
export const searchListApi = () => {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=${API_KEY}&format=json`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};