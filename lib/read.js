'use strict';
let parser= require('juttle/lib/adapters/parsers');
let AdapterRead = JuttleAdapterAPI.AdapterRead;
let client

class ReadMemcached extends AdapterRead {
    constructor(options, params) {
        super(options, params);

        if (options.stats && options.key) {
            throw new errors.compileError('ADAPTER-UNSUPPORTED-FILTER', {
                    proc: 'read memcached',
                    error: 'You may not specify both -key and -stats options'
            });
        }

        if (options.stats) {
            this.stats = options.stats;
            this.op = 'stats'
        }
        if (options.key) {
            this.key = options.key;
            this.op = 'key'
            this.timeField = options.timeField;
            this.format = options.format ? options.format : 'json';
        }
    }

    read(from, to, limit, state) {
        throw Error('implement me');
    }

    init(provided_client) {
        client = provided_client
    }

    static allowedOptions() {
        return AdapterRead.commonOptions().concat(['stats', 'key']);
    }

}
module.exports = {
    init: init,
    read: read
};

module.exports = ReadMemcached;
