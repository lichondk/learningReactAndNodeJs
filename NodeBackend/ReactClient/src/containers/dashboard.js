import React, { Component } from 'react';
import NavBar from '../components/navbar';
import { connect } from 'react-redux';
import { fetchBooking } from '../actions/index';
import ErrorPage from '../components/error_page';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchBooking();
    }
    
    renderBooking(data) {
        console.log(data);
        return data.map((bookings) => {
            return (
                <tr>
                    <td key={bookings.bookingId}>{bookings.totalPrice}</td>
                    <td>{bookings.hairdresserName}</td>
                    <td>{bookings.customerName}</td>
                    <td>{bookings.date}</td>
                    <td>{bookings.startTime}</td>
                    <td>{bookings.serviceType}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pris i alt</th>
                            <th>Frisør</th>
                            <th>Kunde</th>
                            <th>Dato</th>
                            <th>Tidspunkt</th>
                            <th>Service</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bookings.map(this.renderBooking)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { bookings: state.bookings };
}

export default connect(mapStateToProps, { fetchBooking })(Dashboard);