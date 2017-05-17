import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AllHairDresserReducer from './allHairDresser_reducer';
import { choosenHairdresser } from './allHairDresser_reducer';
import  AllServicesReducer  from './allService_reducer';
import AllBookingsReducer from './allBookings_reducer.js';
import { selectService } from './allService_reducer';
import getSalon from './salon_reducer';

const rootReducer = combineReducers({
    hairdresser: AllHairDresserReducer,
    service: AllServicesReducer,
    salon: getSalon,
    bookings: AllBookingsReducer,
    chossenHairdresser: choosenHairdresser,
    selectService1: selectService,
    form: formReducer
});

export default rootReducer;
