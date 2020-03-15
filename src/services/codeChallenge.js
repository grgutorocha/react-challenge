import { default as Service } from 'services';

const endpoint = '/codeChallenge';

const get = (config = {}) => {
    return Service.get(endpoint, config);
}

export default {
    get
}