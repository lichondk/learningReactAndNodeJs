import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { postCustomer } from '../actions/index';


class CustomerBooking extends Component{
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
        
        this.props.postCustomer(values, () => {
            this.props.history.push('/home');
        });
    }   
    render(){
        const { handleSubmit } = this.props;
        return(
         <div className="customerInfo">
          <h5><b>Indast kontaktoplysninger</b></h5>
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
                    label="Telefon:"
                    name="number"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Book</button>      
            </form>
            </div>
        ) ;
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
       if (!values.number || values.number.length <8 ) {
        errors.number = "Indtast venligst et nummer på min. 8 cifrer";
    }

    //if errors is empty, the form is fine to submit 
    //if errors has *any* properties, redux form assumes for is invalid
    return errors;

}
//reduxForm fungere ligesom connect, hvor den giver dirkte adgang 
//til reducerStore
export default reduxForm({
    validate,
    form: 'PostNewCustomer' //skal være unik
})(
    connect(null, { postCustomer })(CustomerBooking)
    ); 