module.exports = {

  getJSON: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      if (request.status === 200) {
        var response = JSON.parse(request.responseText);
        callback(response);
      }
    }
    request.send(null);
  }

};