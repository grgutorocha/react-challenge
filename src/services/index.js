import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-code-challenge.herokuapp.com',
    timeout: 10000
  });

const get = (url, config = {}) => {
    return instance.get(url, config);
};

export default {
    get
}