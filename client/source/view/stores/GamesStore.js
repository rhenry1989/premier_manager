var AppDispatcher = require('../AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _games = [];

function create( text ) {
  _games.push(text)
}

var GamesStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _games;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case 'CREATE_GAME':
      text = action.text.trim();
      if (text !== '') {
        create(text);
        GamesStore.emitChange();
      }
      break;
    default:
      // no op
  }
});

module.exports = GamesStore;