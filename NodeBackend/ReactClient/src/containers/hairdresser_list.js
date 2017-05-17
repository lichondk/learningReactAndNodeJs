import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHairdresser, selectedHairdresser, postBooking } from '../actions/index';
import ErrorPage from '../components/error_page';
import SocketIOClient from 'socket.io-client';
import Actions from '../actions'; 

class Hairdresser extends Component {
    constructor(props) {
        super(props)


        this.getIdHairdresser = this.getIdHairdresser.bind(this);
        this.renderHairdresser = this.renderHairdresser.bind(this);
        // Creating the socket-client instance will automatically connect to the server.
        this.socket = SocketIOClient('http://localhost:3000');
    };
    getIdHairdresser(data) {
       
      this.props.selectedHairdresser(data); 
     // console.log(data.personId);
       //console.log(data.personId  + "Id from hairDresser");
    }

    componentDidMount() {
        this.props.fetchHairdresser();
        this.socket.on('test', function (data) {
            this.props.renderHairdresser(this.props.fetchHairdresser());
        }.bind(this));
    }

    renderHairdresser(hairdresserData) {
        if (!hairdresserData) {
            return <div> Server down </div>
        }
        console.log(hairdresserData);

        return hairdresserData.map((hairdresser) => {
            return (
                <tr >
                    {/*<td key={hairdresser} onClick={() => {this.getIdHairdresser(hairdresser)}}>{hairdresser.personName}</td>*/}
                    <td key={hairdresser}><input type="checkbox" name="myCheckbox" onChange={() => {this.state.hairdresser.push(hairdresser)}}/>{hairdresser.personName}</td>
                    <td>{hairdresser.position}</td>
                </tr>
            )
        }, this)
    }

    render() {
        console.log("mememememmememem" + this.props.kuku);
        return (
            <div className="hairdresserTable">
                <h5><b>Vælg en frisør</b></h5>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Frisør</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.hairdresser.map(this.renderHairdresser)}
                    </tbody>
                </table>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        hairdresser: state.hairdresser
       

    };
}
/*
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            fetchHairdresser: bindActionCreators(fetchHairdresser, dispatch),
            selectedHairdresser: bindActionCreators(selectedHairdresser, dispatch)
        }
    };
}
*/
export default connect(mapStateToProps, { fetchHairdresser, selectedHairdresser })(Hairdresser);


