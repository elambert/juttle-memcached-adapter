var Memcached = require("memcached")
var Read = require('./read');
var Write = require('./write');

var MemcachedBacked = function(config) {

    var memcachedClient = new Memcached(config["memcached"]);

    Read.init(memcachedClient);
    Write.init(memcachedClient);

    return {
        name: 'memcached',
        read: Read.read,
        write: Write.write
    };

};

module.exports = MemcachedBacked;