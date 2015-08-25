var EventEmitter = require('events');


var EventProxy = module.exports = function(model) {
    EventEmitter.call(this);
    this.model = model;
    this.model.eventProxy = this;
};

EventProxy.prototype = Object.create(EventEmitter.prototype);
EventProxy.prototype.constructor = EventProxy;