var React = require( 'react' );

var LoadGameClubInfo = React.createClass({

  generateLogoStyle: function() {
    var club = this.props.manager.club
    return({
      background: 'linear-gradient( -45deg, '+club.col_2+' 0%, '+club.col_2+' 50%, '+club.col_1+' 50%, '+club.col_1+' 100% )'
    })
  },

  render: function() {
    var logoStyle = this.generateLogoStyle();
    return(
      <div className="__text-center">
        <h5>
          {this.props.manager.first_name+' '+this.props.manager.second_name} 
        </h5>
        <p>{this.props.manager.club.name}</p>
        <div className="card-img round-logo" style={logoStyle}></div>
      </div>
    )
  }

});

module.exports = LoadGameClubInfo;