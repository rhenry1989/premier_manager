var React = require('react');
var GamesStore = require('../stores/GamesStore');



var Main = React.createClass({

  getInitialState: function() {
    return {games: GamesStore.getAll()};
  },

  componentDidMount: function() {
    GamesStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GamesStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <h1> App </h1>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState({games: GameStore.getAll()});
  }

});

// <OpeningScreen
//   allTodos={this.state.allTodos}
//   areAllComplete={this.state.areAllComplete}
// >
// </OpeningScreen>

module.exports = Main;