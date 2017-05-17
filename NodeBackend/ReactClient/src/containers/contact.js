import React, { Component } from 'react';
import NavBar from '../components/navbar';
import { connect } from 'react-redux';
import { fetchSalon } from '../actions/index';
import ErrorPage from '../components/error_page';
import { Link } from 'react-router-dom';


class Contact extends Component {
    componentDidMount() {
        this.props.fetchSalon();
    }
    renderSalon(data) {
        if (!data) {
            return <ErrorPage />
        }
        console.log(data);
        return data.map((salon) => {
            return (
                <tr>
                    <td key={salon.salonId}> {salon.name_}</td>
                    <td> {salon.address}</td>
                    <td> {salon.zipcode}</td>
                    <td> {salon.city}</td>
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
                            <th>Navn</th>
                            <th>Adresse</th>
                            <th>Postnummer</th>
                            <th>By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.salon.map(this.renderSalon)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { salon: state.salon };
}

export default connect(mapStateToProps, { fetchSalon })(Contact);