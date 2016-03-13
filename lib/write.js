var client;

'use strict';

let AdapterWrite = AdapterAPI.AdapterWrite;

class WriteMemcached extends AdapterWrite {
    constructor(options, params) {
        super(options, params);
        this.logger.debug('initializing write Memcached');
        throw Error('implement me');
    }

    write(points) {
        throw Error('implement me');
    }

    eof() {
        throw Error('implement me');
    }
}

module.exports = WriteMemcached;
