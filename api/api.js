const fetch = require('node-fetch');

var api = function (access_token, version) {
    this.access_token = access_token;
    this.version = version;
};

api.prototype.buildParams = function () {
    let params = new URLSearchParams();
    params.append('access_token', this.access_token);
    params.append('v', this.version);

    return params;
};

api.prototype.getUser = function (user_ids = []) {
    let params = this.buildParams();
    params.append('user_ids', user_ids.join(','));

    return fetch('https://api.vk.com/method/users.get', {method: 'POST', body: params})
        .then(res => res.json());
};

module.exports = api;