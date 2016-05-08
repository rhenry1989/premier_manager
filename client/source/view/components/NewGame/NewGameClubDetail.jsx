var React = require( 'react' );

var NewGameClubDetail = React.createClass({

  render: function() {
    var club = this.props.club
    if(!club){return <h4> No Club Selected </h4>}
    var logoStyle = {
      background: 'linear-gradient( -45deg, '+club.col_2+' 0%, '+club.col_2+' 50%, '+club.col_1+' 50%, '+club.col_1+' 100% )'
    }
    return (
      <figure className="card">
        <h3 className="__text-grey">Start your career at:</h3>
        <div className="card-img round-logo" style={logoStyle}></div>
        <figcaption>
          <div className="card-title">
            <h2>{club.name} Football Club</h2>
            <small>
              <span className="__text-grey">Founded: </span> 
              {club.founded}
            </small>
          </div>
          <div className="card-content">
            <p>
              {club.description}
            </p>
          </div>
          <div className="card-footer">

          </div>
        </figcaption>
      </figure>
    )
  }

});

module.exports = NewGameClubDetail;