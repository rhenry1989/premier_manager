var AppDispatcher = require('../AppDispatcher');

var GameActions = {

  create: function(text) {
    AppDispatcher.dispatch({
      actionType: 'CREATE_GAME',
      text: text
    });
  }

}

module.exports = GameActions;