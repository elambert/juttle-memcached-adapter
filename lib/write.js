var Juttle = require('juttle/lib/runtime').Juttle;
var JuttleErrors = require('juttle/lib/errors');
var JuttleMoment = require('juttle/lib/moment/juttle-moment');
var client;

var Write = Juttle.proc.sink.extend({
    procName: 'write memcached',
    initialize: function(options) {
        console.log("init");
    },
    process: function(points) {
        console.log("process");
    },
    eof: function() {
        console.log("eof");
    }
})

function init(provided_client) {
    client = provided_client;
}

module.exports = {
    init: init,
    write: Write
};
