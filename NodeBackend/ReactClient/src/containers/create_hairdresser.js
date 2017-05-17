import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { postHairdresser } from '../actions/index';
import NavBar from '../components/navbar';


class PostHairdresser extends Component {
    renderField(field) {
        // instead writing "field.meta.touched" and field.meta.error
        // we can now just write touched or error, they are "options"
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label} </label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {/*when a another field is touch, its run the validate 
                and checks for errors*/}
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        
        this.props.postHairdresser(values, () => {
            this.props.history.push('/home');
        });
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            //handleSubmit(reduxFormPart) makes sure values are good
            //if they are good, we good next metode(onSubmit with a callback)
            //thats makes sure data gets postet(NOT!!! a reduxForm thing)
            <div>
                <NavBar/>
                <div className="createHairdresser">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            label="Navn:"
                            //connect the validates function, so erros.title.
                            name="personName"

                            component={this.renderField}
                        />
                        <Field
                            label="Email:"
                            name="personEmail"
                            component={this.renderField}
                        />
                        <Field
                            label="Adgangskode:"
                            name="personPassword"
                            component={this.renderField}
                        />
                        <Field
                            label="Position:"
                            name="position"
                            component={this.renderField}
                        />
                        <button type="submit" className="btn btn-primary">Opret</button>
                        <a className="btn btn-danger" href="/home">
                            Annuller
                            </a>
                    </form>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    //validate the inputs from 'values'
    if (!values.personName || values.personName.length < 3) {
        errors.personName = "Indtast venligst navn";
    }
    if (!values.personEmail) {
        errors.personEmail = "Indtast venligst email";
    }
    if (!values.personPassword) {
        errors.personPassword = "Indtast venligst password";
    }
       if (!values.position) {
        errors.position = "Indtast venligst position";
    }

    //if errors is empty, the form is fine to submit 
    //if errors has *any* properties, redux form assumes for is invalid
    return errors;

}
//reduxForm fungere ligesom connect, hvor den giver dirkte adgang 
//til reducerStore
export default reduxForm({
    validate,
    form: 'PostNewHairdresser' //skal være unik
})(
    connect(null, { postHairdresser })(PostHairdresser)
    ); 