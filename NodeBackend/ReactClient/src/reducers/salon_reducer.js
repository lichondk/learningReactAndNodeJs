import {FETCH_SALON} from '../actions/index'; 

export default function(state = [],action){
    switch(action.type){
        case FETCH_SALON:
        //concat saves old data and still pushes the new data in 
        return state.concat([action.payload.data]);
        default: return state 
        //this is same as concat
        //return [action.payload.data, ...state]
    }
    
}
