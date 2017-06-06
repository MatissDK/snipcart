var Backbone = require('backbone');
var _ = require('underscore');
var Message = require('./../models/message');

var MessagesCollection = Backbone.Collection.extend({
  model: Message,
  url: 'http://localhost:3000/todo'
});

module.exports = MessagesCollection