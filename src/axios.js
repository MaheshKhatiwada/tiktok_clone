import axios from 'axios';

const instance =axios.create({
    baseURL:"https://mern-tiktok-mk.herokuapp.com/"
});

export default instance;


