var React = require('react');
var ReactDOM = require('react-dom');

//Components
var FormContainer = require('./form');
var TwitterPanel = require('./TwitterPanel');
var LandingHero = require('./LandingHero');
var Footer = require('./Footer');

//CSS Components
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;


function App() {

  var styles = {
    body: {
      padding: 30,
      backgroundColor: "#FFFFFF"
    },
    background: {
      backgroundColor: "#292F36",
      height: "100%"
    }
  }

  return (
      <div style={styles.background}>

        <LandingHero />

        <Row style={styles.body}>

          <FormContainer />

          <TwitterPanel />

        </Row>

        <Footer />

      </div>
  );
}

module.exports = App;
