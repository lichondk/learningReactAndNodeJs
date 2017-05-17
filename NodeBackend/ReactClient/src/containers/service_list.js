import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchService, servicesListChecked } from '../actions/index';
import ErrorPage from '../components/error_page';
import { Link } from 'react-router-dom';

class ServiceList extends Component {
constructor(props){
    super(props)
    this.state = {services: []}

    this.getService = this.getService.bind(this); 
    this.renderService = this.renderService.bind(this);
}
   
    componentDidMount() {
        this.props.fetchService();
    }
    getService(serviceData){

        this.props.servicesListChecked(serviceData);
    }
    renderService(data) {
        if (!data) {
            return <ErrorPage />
        }
        console.log(data);
        return data.map((service) => {
            return (
                <tr onClick={() => {this.getService(service)}}>
                    <td key={service.serviceId}><input type="checkbox" name="myCheckbox" /> {service.serviceType}</td>
                    <td>Kr. {service.price},-</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="serviceTable">
                <h5><b>Vælg en eller flere services</b></h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Pris</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.service.map(this.renderService)}
                    </tbody>
                </table>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return { service: state.service };
}
/*
function mapDispatchToProps(dispatch){
    return {
        actions:{
        fetchService: bindActionCreators(fetchService, dispatch), 
        servicesListChecked: bindActionCreators(servicesListChecked, dispatch)
       }
    }
}
*/
export default connect(mapStateToProps, { fetchService, servicesListChecked })(ServiceList);