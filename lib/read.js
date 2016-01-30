var Juttle = require('juttle/lib/runtime').Juttle;
var JuttleErrors = require('juttle/lib/errors');
var JuttleMoment = require('juttle/lib/moment/juttle-moment');
var _ = require('underscore');
var client;

var Read = Juttle.proc.source.extend({
    procName: 'read memcached',
    initialize: function(options, params, pname, location, program, juttle) {
        console.log("init");
    },
    start: function() {
        console.log("start");
    },
    teardown: function() {
        console.log("teardown");
    }
});

function init(provided_client) {
    client = provided_client;
}

module.exports = {
    init: init,
    read: Read
};
