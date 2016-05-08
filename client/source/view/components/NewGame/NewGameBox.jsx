var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var _ = require( 'lodash' );
var NewGameSelectNation = require( './NewGameSelectNation' );
var NewGameSelectLeague = require( './NewGameSelectLeague' );
var NewGameNationDetail = require( './NewGameNationDetail' );
var NewGameClubDetail = require( './NewGameClubDetail' );
var NewGameSubmit = require( './NewGameSubmit' );
// var NewManagerBox = require( '../Club/NewManagerBox' );

var NewGameBox = React.createClass({

  getInitialState: function() {
    return { 
      nations:[], 
      focusNation:null, 
      focusLeague:null,
      focusClub:null
    }
  },

  componentDidMount: function() {
    var url = "http://localhost:3000/nations?leagues=true&clubs=true";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(request.status === 200){
        var nations = JSON.parse(request.responseText);
        this.setState({ 
          nations: nations, 
          focusNation: nations[0],
          focusLeague: nations[0].leagues[0],
          focusClub: nations[0].leagues[0].clubs[0] 
        });
      }
    }.bind(this)
    request.send(null);
  },

  startNewGame: function(e) {
    e.preventDefault();
    console.log( 'woooooohooooooo' )
    ReactDOM.render(
      <NewManagerBox />,
      document.getElementById( 'app' )
    )
  },

  setFocusNation: function(nation) {
    this.setState({
      focusNation: nation,
      focusLeague: nation.leagues[0],
      focusClub: nation.leagues[0].clubs[0]
    })
  },

  setFocusLeague: function(league) {
    this.setState({ 
      focusLeague: league,
      focusClub: league.clubs[0]
    })
  },

  setFocusClub: function(club) {
    this.setState({ focusClub: club })
  },

  render: function() {
    return (
      <section className="home-menu-wrapper">
        <div className="panel container-med row-90-height">
          <div className="panel-header __text-large">
            <div className="__float-left">Select team to manage</div>
            <div className="__float-right">
              <form className="inline-form __text-right" onSubmit={this.startNewGame}>
                <NewGameSelectNation 
                  nations={this.state.nations} 
                  selectNation={this.setFocusNation}>
                </NewGameSelectNation>
                <NewGameSelectLeague
                  nation={this.state.focusNation}
                  selectLeague={this.setFocusLeague}> 
                </NewGameSelectLeague>
                <NewGameSubmit />
              </form>
            </div>
          </div>
          <div className="panel-content row">
            <div className="column column-6 __border-r scroll-y">
              <NewGameNationDetail 
                nation={this.state.focusNation}
                league={this.state.focusLeague}
                selectClub={this.setFocusClub}>
              </NewGameNationDetail>
            </div>
            <div className="column column-6">
              <NewGameClubDetail 
                club={this.state.focusClub}>
              </NewGameClubDetail>
            </div>
          </div>
        </div>
      </section>
    )
  }

})

module.exports = NewGameBox;