var React = require('react');

class FormErrors extends React.Component {

  render(){
    var styles = { color: 'red' }

    if(this.props.formErrors.phone) {
      return (
        <div style={styles} className="formErrors">
          Invalid phone number given. Please enter your phone number like this: 3035892321
        </div>
      );
    } else if(this.props.formErrors.warning.length > 0){
      return (
        <div style={styles} className="formErrors">
          Please select a state, or select "Send me warnings from all states."
        </div>
      )
    } else {
      return <p></p>;
    }
  }
}

module.exports = FormErrors;
