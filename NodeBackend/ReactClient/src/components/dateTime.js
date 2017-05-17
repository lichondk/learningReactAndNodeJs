import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

//import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
 import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
   //console.log(this.state.startDate._d)
    this.setState({
      startDate: date
    });
  }

  
  render() {
    return (
      <div className="date">
      <h5><b>Vælg dato</b></h5>
      <label>Dato:  </label>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
         dateFormat="MM/DD/YYYY" className="red-border"
         locale="en-gb"
        highlightDates={[moment().subtract(),]}
    /></div>);
  }
}

export default Example;