import axios from 'axios';

const KEY = 'AIzaSyBtA0VBeEJDjlM5Osj1xK3bqGjdzaqMQOs';

export default axios.create ({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type : 'video',
        maxResults : 5,
        key : KEY
    }

});