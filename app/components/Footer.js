var React = require('react');

var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;


class Footer extends React.Component {

  render(){
    var styles = {
      backgroundColor: "#292F36",
      color: "#E0E0E0",
      padding: 30,
      position: "relative",
      width: "100%",
      bottom: 0
    }

    return (
      <Row style={styles}>
        <Col sm={6}>
        </Col>
        <Col sm={6}>
          <p>We are not affiliated with the EDCC. To find out more information about their work, please visit <a href="http://equinediseasecc.org/">http://equinediseasecc.org/</a></p>
        </Col>
      </Row>
    );
  }
}

module.exports = Footer;
