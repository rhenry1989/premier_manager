var React = require( 'react' );

var NewManagerClub = React.createClass({

  render: function() {
    var club = this.props.club
    var logoStyle = {
      background: 'linear-gradient( -45deg, '+club.col_2+' 0%, '+club.col_2+' 50%, '+club.col_1+' 50%, '+club.col_1+' 100% )'
    }
    return(
      <figure className="card">
        <h4 className="__text-grey">You have been appointed manager of:</h4>
        <div className="card-img round-logo" style={logoStyle}></div>
        <figcaption>
          <div className="card-title">
            <h2>{club.name} Football Club</h2>
            <small>
              <span className="__text-grey">Founded: </span> 
              {club.founded}
            </small>
          </div>
        </figcaption>
      </figure>
    )
  }

});

module.exports = NewManagerClub