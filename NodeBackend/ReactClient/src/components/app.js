import React, { Component } from 'react';
import HairdresserList from '../containers/hairdresser_list';
import ServiceList from '../containers/service_list';
import BootstrapNavbar from './navbar';
import DatePicker from './dateTime.js';
import TimePicker from './timePicker';
//import CustomerBooking from '../containers/customer_booking';
import Booking from '../containers/booking';



export default class App extends Component {

  render() {
    return (

      <div>
      <BootstrapNavbar />
        <HairdresserList />
        <ServiceList />
        <DatePicker  selected={this.onChange}/>
        <TimePicker />
        <Booking />
      </div>
    );
  }
}
