import axios from 'axios';
import SocketIOClient from 'socket.io-client';
//import { getIdHairdresser } from '../containers/hairdresser_list';
const ROOT_URL = 'http://localhost:3000/';


//exporting the function 
export const FIND_HAIRDRESSER = 'FIND_HAIRDRESSER';
// Function to find the select hairdresser in the table 
export function selectedHairdresser(getdata) {
    console.log(getdata);
    //givning the function a type(FIND_HAIRDRESSER), so we can find it in the reducer
    // payload is the result of function
    return {
        type: FIND_HAIRDRESSER,
        payload: getdata
    };
}

export const FETCH_HAIRDRESSER = 'FETCH_HAIRDRESSER';
// Function to find all the hairdresser in chosen salon 
export function fetchHairdresser() {
    //making varible for our url 
    const url = `${ROOT_URL}Hairdresser/allHairdresser`;
    //making a GET request to url with axios 
    const request = axios.get(url);
    //givning the function a type, so we can find it in the reducer
    // payload is the result of function
    return {
        type: FETCH_HAIRDRESSER,
        payload: request
    };
}

//This function gets all the service on the choosen salon 
export const FETCH_SERVICE = 'FETCH_SERVICE';
export function fetchService() {
    //Making a const for url, because it should not change
    const url = `${ROOT_URL}Service/getAllService`;
    //Making a GET request to url 
    const request = axios.get(url);
    console.log('Requst', request);
    //givning the function a type, so we can find it in the reducer
    // payload is the result of function
    return {
        type: FETCH_SERVICE,
        payload: request
    };
}
//This function gets a specfic salon. 
export const FETCH_SALON = 'FETCH_SALON';
export function fetchSalon() {
    //Making a const for url
    const url = `${ROOT_URL}Salon/getSalon/1`;
    const request = axios.get(url);
    //givning the function a type, so we can find it in the reducer
    // payload is the result of function
    return {
        type: FETCH_SALON,
        payload: request
    };
}
//This function finds a choosen service from table 
export const SERVICES_SELECTED = 'SERVICES_SELECTED';
export function servicesListChecked(service) {
    console.log(service);
    return {
        type: 'SERVICES_SELECTED',
        payload: service
    }
}
//This function are posting a hairdresser to the restAPI 
export const POST_HAIRDRESSER = 'POST_HAIRDRESSER';
export function postHairdresser(values, callback) {
    //making a POST request to the restAPI, with axios, with a callback that redirect back to home site 
    const request = axios.post(`${ROOT_URL}Hairdresser/createHairDresser`, values)
        .then(() => callback());
    console.log(request);
   //givning the function a type, so we can find it in the reducer
    // payload is the result of function
    return {
        type: POST_HAIRDRESSER,
        payload: request
    };
}

export const FETCH_BOOKING = 'FETCH_BOOKING';
export function fetchBooking() {
    const ROOT_URL = 'http://localhost:56662/api/router/getAllBookings';
    console.log(ROOT_URL);
    const url = `${ROOT_URL}`;
    const request = axios.get(url);

    console.log('Requst', request);
    return {
        type: FETCH_BOOKING,
        payload: request
    };
}

export const POST_BOOKING = 'POST_BOOKING';
export function postBooking(values,hairdresserId,serviceSelect, callback) {
    console.log("tetstststststtst");

    values.totalPrice = "5000";
    values.hairdressId = hairdresserId;
   // values.customerId = "1";
   values.personPassword = "sugardaddy";
   values.personType = "customer"; 
   values.date_ = "20120618 10:34:pm am";
   values.startTime = "10:30"; 
   values.endTime = "12:00";
    values.salonBookingId = "1";
    values.services = [];
    values.services.push(serviceSelect)
    console.log(values)
    const ROOT_URL = 'http://localhost:56662/api/Router/AddBooking';
    const request = axios.post(`${ROOT_URL}`, values)
        .then(() => callback());
    console.log(request);
    return {
        type: POST_BOOKING,
        payload: request
    };
}

export const POST_CUSTOMER = 'POST_CUSTOMER';
export function postCustomer(values, callback) {
    const ROOT_URL = 'http://localhost:3000/Customer/createCustomer';
    console.log(ROOT_URL);
    const request = axios.post(`${ROOT_URL}`, values)
        .then(() => callback());
    console.log(request);
    return {
        type: POST_CUSTOMER,
        payload: request
    };
}
