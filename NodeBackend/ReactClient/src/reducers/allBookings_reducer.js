import {FETCH_BOOKING} from '../actions/index'; 

export default function(state = [],action){
    switch(action.type){
        case FETCH_BOOKING:
        
        return state.concat([action.payload.data]);
        default: return state 
      
    }
    
}

