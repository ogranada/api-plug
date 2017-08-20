
const querystring = require('querystring');
const axios = require('axios');

function Plug(config) {
    config = config || {};
    this.host = config.host || '127.0.0.1';
    this.port = config.port || 6897;
    this.secure = config.secure || false;
    this.url = (this.secure ? 'https' : 'http') + '://' + this.host + ':' + this.port;
    this.fullurl = this.url + '/api';
    this.servers = {};
    this.ready = false;
    const me = this;
    axios.get(this.fullurl)
        .then(function (response) {
            // console.log('Resp:', response.data);
            const baseInfo = response.data;
            const resources = baseInfo.resources;
            me.servers[baseInfo.name] = {};
            let idx, resource;
            for (idx in resources) {
                resource = resources[idx];
                me.servers[baseInfo.name][resource.name] = {
                    path: me.url + resource.path,
                    fields: resource.fields
                }
            }
            me.ready = true;
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
}

Plug.prototype.get = function Plug_getResource(server, resource, fields) {
    const me = this;
    return new Promise(function (resolve, reject) {
        const intrvl = setInterval(() => {
            if (me.ready) {
                clearInterval(intrvl);
                axios.get(me.servers[server][resource].path + '?' + querystring.stringify(fields))
                    .then((response) => {
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
                    ;
            }
        }, 10);
    });
}

Plug.prototype.save = function Plug_saveResource(server, resource, fields) {
    const me = this;
    return new Promise(function (resolve, reject) {
        const intrvl = setInterval(() => {
            if (me.ready) {
                clearInterval(intrvl);
                axios.post(me.servers[server][resource].path, fields)
                    .then((response) => {
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
                    ;
            }
        }, 10);
    });
}

Plug.prototype.update = function Plug_saveResource(server, resource, fields) {
    const me = this;
    return new Promise(function (resolve, reject) {
        const intrvl = setInterval(() => {
            if (me.ready) {
                clearInterval(intrvl);
                axios.put(me.servers[server][resource].path, fields)
                    .then((response) => {
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
                    ;
            }
        }, 10);
    });
}

Plug.prototype.delete = function Plug_saveResource(server, resource, fields) {
    const me = this;
    return new Promise(function (resolve, reject) {
        const intrvl = setInterval(() => {
            if (me.ready) {
                clearInterval(intrvl);
                axios.delete(me.servers[server][resource].path + '/' + fields.id, fields)
                    .then((response) => {
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
                    ;
            }
        }, 10);
    });
}

module.exports = Plug;
