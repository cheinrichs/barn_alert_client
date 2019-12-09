var React = require('react');
var ReactDOM = require('react-dom');

var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var HelpBlock = require('react-bootstrap').HelpBlock;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Checkbox = require('react-bootstrap').Checkbox;

var FormErrors = require('./FormErrors.js');

var axios = require('axios');

var Select = require('react-select');


class FormContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      phone_number: "",
      warning: "",
      anyWarnings: false,
      formErrors: {phone: '', warning: ''},
      phoneValid: false,
      warningValid: false,
      formValid: false,
      formState: 'openSignUp'
    }

    //moves between 3 states,
    // 'openSignUp' - signup is available
    // 'loading' - loading after a signup has been submitted
    // 'signedUp' - confirmation that signup worked

    this.anyStateWarnings = this.anyStateWarnings.bind(this);
    this.signUp = this.signUp.bind(this);
    this.selectedStateWarning = this.selectedStateWarning.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.addAnotherAlert = this.addAnotherAlert.bind(this);
  }

  handleUserInput (e) {
    if(e.target.name === "anyWarnings"){
      this.setState({"anyWarnings": !this.state.anyWarnings});
    } else {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value});
    }
  }

  signUp(){
    if(this.state.phone_number.length < 10 || this.state.phone_number.length > 10){
      this.setState((prevState, props) => {
        prevState.formErrors.phone = "Invalid Phone Given"
        return prevState;
      })
    } else {
      this.setState((prevState, props) => {
        prevState.formErrors.phone = ""
        return prevState;
      })
    }
    if(this.state.warning == "" && this.state.anyWarnings == false){
      this.setState((prevState, props) => {
        prevState.formErrors.warning = "Invalid Barn Alert Warning Area"
        return prevState;
      })
    } else {
      this.setState((prevState, props) => {
        prevState.formErrors.warning = ""
        return prevState;
      })
    }

    let data = {
      phone_number: this.state.phone_number,
      warning: this.state.warning,
      anyWarnings: this.state.anyWarnings,
    }
    console.log(data);
    this.setState((prevState, props) =>{
      prevState.loading = 'loading';
      return prevState;
    })
    axios.post('https://barn-alert.herokuapp.com/addNewAlertMembership', data).then( res => {
      //TODO
      //if there is already an unconfirmed, it adds a new one instead of updating the old
      //if alert already added
      //if alert is unconfirmed
      console.log(res.data);
      this.setState((prevState, props) =>{
        prevState.formState = 'signedUp';
        return prevState;
      })
      console.log("signed up");
      console.log(res.data);
    })
  }

  addAnotherAlert(){
    this.setState((prevState, props) => {
      prevState.formState = 'openSignUp';
      return prevState;
    })
  }

  anyStateWarnings(){
    console.log("any warnings sign up")
    this.setState(state => {
      state.anyWarnings = !this.state.anyWarnings
    });
  }

  selectedStateWarning(e){
    let newWarningValue = e.target.value;
    this.setState(state => {
      state.warning = newWarningValue;
    })
  }

  render() {
    var styles = {
      padding: 20,
      signUpButton:{
        backgroundColor: "#4ECDC4",
        borderColor: "white",
        color: "white",
      },
      addAnotherAlertButton: {
        backgroundColor: "#4ECDC4",
        borderColor: "white",
        color: "white",
      }
    }

    if(this.state.formState === 'openSignUp'){
      return (
        <Col sm={12} md={6} lg={4} lgOffset={2}>

          <Panel>

            Enter your phone number and your state, receive geotargeted EDCC contagious disease alerts texted to your phone as soon as they become available.

            <h4>Sign Up For Updates</h4>
            <FormGroup style={styles}>

              <FormErrors formErrors={this.state.formErrors} />

              <Row>
                <Col>
                  <FormControl placeholder="Phone" name="phone_number" onChange={(event) => this.handleUserInput(event)}/>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>

                  <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" placeholder="Choose your state" name="warning" onChange={(event) => this.handleUserInput(event)}>
                      <option value="">Select your state:</option>
                      <option value="AL">AL</option>
                      <option value="AK">AK</option>
                      <option value="AZ">AZ</option>
                      <option value="AR">AR</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="IA">IA</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="ME">ME</option>
                      <option value="MD">MD</option>
                      <option value="MA">MA</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MS">MS</option>
                      <option value="MO">MO</option>
                      <option value="MT">MT</option>
                      <option value="NE">NE</option>
                      <option value="NV">NV</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NY">NY</option>
                      <option value="NC">NC</option>
                      <option value="ND">ND</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VT">VT</option>
                      <option value="VA">VA</option>
                      <option value="WA">WA</option>
                      <option value="WV">WV</option>
                      <option value="WI">WI</option>
                      <option value="WY">WY</option>
                    </FormControl>
                  </FormGroup>

                </Col>
              </Row>

              <Row>
                <Col>
                  or
                  <Checkbox name="anyWarnings" onChange={(event) => this.handleUserInput(event)}>Send me warnings from all states</Checkbox>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button style={styles.signUpButton} className="pull-right" onClick={this.signUp}>Sign up</Button>
                </Col>
              </Row>

            </FormGroup>
          </Panel>
        </Col>
      )
    } else if(this.state.formState === 'loading') {
      return (
        <Col sm={5} md={5} lg={4} lgOffset={2}>
          <Panel>
            <h4>Loading!</h4>
          </Panel>
        </Col>
      )
    } else if(this.state.formState === 'signedUp'){
      return (
        <Col sm={5} md={5} lg={4} lgOffset={2}>
          <Panel>
            <h4>Success! A text message should be sent to your phone</h4>
            <Button style={styles.addAnotherAlertButton} onClick={this.addAnotherAlert}>Add Another Alert</Button>
          </Panel>
        </Col>
      )
    }

  }
}

module.exports = FormContainer;
