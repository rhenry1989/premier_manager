var React = require( 'react' );

var NewManagerBox = React.createClass({

  getInitialState: function() {
    return { club: this.props.selectedClub }
  },

  render: function() {
    var club = this.state.club
    var logoStyle = {
      background: 'linear-gradient( -45deg, '+club.col_2+' 0%, '+club.col_2+' 50%, '+club.col_1+' 50%, '+club.col_1+' 100% )'
    }
    return(
      <section className="home-menu-wrapper">
        <div className="panel container-med row-90-height">
          <div className="panel-header __text-large">
            <div className="__float-left">Manager Details</div>
            <div className="__float-right">
              <form className="inline-form __text-right" onSubmit={this.beginGame}>
                <button type="submit" className="button button-simple button-w-icon">
                  Continue
                  <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="panel-content row">
            <div className="column column-6 __border-r scroll-y __vertical-center-align">
              <figure className="card">
                You have been appointed manager of:
                <div className="card-img round-logo" style={logoStyle}></div>
                <figcaption>
                  <div className="card-title">
                    <div>{club.name} Football Club</div>
                    <small className="__text-grey">founded:</small> {club.founded}
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="column column-6">

            </div>
          </div>
        </div>
      </section>
    )
  }

});

module.exports = NewManagerBox;