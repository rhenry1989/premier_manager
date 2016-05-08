var React = require( 'react' );

var NewManagerClub = React.createClass({

  render: function() {
    var club = this.props.club
    var logoStyle = {
      background: 'linear-gradient( -45deg, '+club.col_2+' 0%, '+club.col_2+' 50%, '+club.col_1+' 50%, '+club.col_1+' 100% )'
    }
    return(
      <figure className="card">
        <div className="card-img round-logo" style={logoStyle}></div>
        <figcaption>
          <div className="card-title">
            <small className="__text-grey">You have been appointed manager of:</small>
            <h4>{club.name} Football Club</h4>
          </div>
        </figcaption>
      </figure>
    )
  }

});

module.exports = NewManagerClub