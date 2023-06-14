const host = 'http://localhost:5001';

const request = async (url, options) => {
    return fetch(host + url, options);
};

const getOptions = (method = 'GET', data) => {
    let options = {
        method,
        headers: {},
    };
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (sessionStorage.getItem('token') != null) {
        options.headers.token = sessionStorage.getItem('token');
    }

    return options;
};

const get = (url) => request(url, getOptions());
const post = (url, data) => request(url, getOptions('POST', data));
const put = (url, data) => request(url, getOptions('PUT', data));
const del = (url, data) => request(url, getOptions('DELETE', data));

module.exports = {
    get,
    post,
    put,
    delete: del,
};
