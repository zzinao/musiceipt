import axios from 'axios';

const API_KEY = 'cee47cb2e2c673012ee70b97b8e2bdcb';

export const searchListApi = (search: string) => {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=${API_KEY}&format=json`)
        .then((res) => console.log(res.data.results.trackmatches.track))
        .catch((err) => console.log(err));
};