import merge from 'lodash';
import { FETCH_HAIRDRESSER, FIND_HAIRDRESSER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_HAIRDRESSER:
            state = [];
            //concat saves old data and still pushes the new data in 
            return state.concat([action.payload.data] );
        //this is same as concat
        //return [action.payload.data, ...state]sx
       
        default: return state
    }

}
export const choosenHairdresser = (state = {}, action) => {
    console.log("kuku");
    switch (action.type) {
        case FIND_HAIRDRESSER:
        console.log(action.payload.hairDresserId +"miaiaiaiai");
           return action.payload.hairDresserId;
        default: return state  
    }

}

