var React = require('react');

//Other Libraries
var axios = require('axios');

//CSS Components
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;
var Media = require('react-bootstrap').Media;



class TwitterPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageSrc: "",
      edccTweets: ""
     };

    this.styles = {
      image: {
        width: "100%"
      }
    }

  }

  componentDidMount() {

    axios.get('https://barn-alert.herokuapp.com/getEdccTwitterMessages').then(res =>{
      var listItems = res.data.twitterMessages.map(function(item) {

        var link = item.text.substring(item.entities.urls[0].indices[0], item.entities.urls[0].indices[1]);
        var linkActivatedText = item.text.substring(0, item.entities.urls[0].indices[0]) + '<a href="' + link + '" target="_blank">' + link + '</a>' + item.text.substring(item.entities.urls[0].indices[1]);

        return (
          <Media key={item.id}>
           <Media.Left>
              <a href="https://twitter.com/EquineDiseaseCC" target="_blank"><img src={item.user.profile_image_url} alt="Image"/></a>
            </Media.Left>
            <Media.Body>
              <p dangerouslySetInnerHTML={{__html: linkActivatedText}}></p>
            </Media.Body>
            <hr />
          </Media>
        );

      });

      this.setState({ edccTweets: listItems });
    })

  }

  render() {

    return (
      <Col sm={12} md={6} lg={4}>
        <Panel style={this.styles.container} onClick={this.handleClick}>
          <h3>Recent Updates</h3>
          <ul>{ this.state.edccTweets }</ul>
        </Panel>
      </Col>
    );
  }
}

module.exports = TwitterPanel;
