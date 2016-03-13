'use strict';
let memcached = require('memcached')

function MemcachedAdapter(config, Juttle) {
    var memcachedClient = new memcached(config["memcached"]);
    var Read = require('./read')
    var Write = require('./write')
    var Optimize = require('./optimize')
    Read.init(memcachedClient);
    Write.init(memcachedClient);
    return {
        name: 'memcached',
        read: Read.read,
        write: Write,
        optimizer: Optimize
    };
}

module.exports = MemcachedAdapter;