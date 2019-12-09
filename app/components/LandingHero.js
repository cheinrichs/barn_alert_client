var React = require('react');

var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;

var BackgroundImage = require('../images/barn_landing.jpg');



class LandingHero extends React.Component {

  render() {
    var styles = {
      backgroundImage: 'url(' + BackgroundImage + ')',
      backgroundSize: 'cover',
      padding: 40,
      color: 'white',
      height: 500,
    }

    return (
      <Jumbotron style={styles}>
        <img height={160} src={require('../images/Barn-Alert.png')} alt="Image"/>
        <p>Equine Contagious Disease Text Alerts</p>
      </Jumbotron>
    );
  }
}

module.exports = LandingHero;
