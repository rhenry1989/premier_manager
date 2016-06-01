var xhr = function(url, store) {
  this.url = url;
  this.store = store;
}

xhr.prototype = {

  fetch: function() {
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function() {
      if (request.status === 200) {
        var response = JSON.parse(request.responseText);
        this.store.dispatch({
          type: 'RECEIVE_GAMES',
          games: response
        })
      }
    }.bind(this);
    request.send(null);
  }

};

module.exports = xhr;
