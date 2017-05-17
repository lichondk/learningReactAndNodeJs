import React, {Component} from 'react'
import Parent from './timePicker';
import DatePicker from './dateTime.js';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class ErrorPage extends Component {
    render() {
        return (
            <div>
                <DatePicker  selected={this.onChange}/>
                <h3></h3>
                <img src='http://i.imgur.com/Rvw98Br.jpg' />
                <Parent/>
            </div>
        );
    }
}