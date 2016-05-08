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
        <h5>Start your career at:</h5>
        <div className="card-img round-logo" style={logoStyle}></div>
        <figcaption>
          <div className="card-title">
            <h3>{club.name} Football Club</h3>
            <small>
              <span className="__text-grey">Founded: </span> 
              {club.founded}
            </small>
          </div>
          <div className="card-content">
            <div className="__text-grey">
              {club.description}
            </div>
          </div>
          <div className="card-footer">

          </div>
        </figcaption>
      </figure>
    )
  }

});

module.exports = NewGameClubDetail;