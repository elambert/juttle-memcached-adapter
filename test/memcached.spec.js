var memcached_backend = require('../');
var _ = require('underscore');
var juttle_test_utils = require('juttle/test/runtime/specs/juttle-test-utils');
var check_juttle = juttle_test_utils.check_juttle;
var expect = require('chai').expect;
var Juttle = require('juttle/lib/runtime').Juttle;

var config = {
    "memcached": "127.0.0.1:11211"
};

var TestUtils = {
    init: function (adapterConfig, adapterClass) {
        adapter = adapterClass(adapterConfig);
        Juttle.adapters.register(adapter.name, adapter);
    }
}

TestUtils.init(config, memcached_backend);