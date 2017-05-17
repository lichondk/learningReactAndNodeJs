import {FETCH_SERVICE, SERVICES_SELECTED} from '../actions/index';


export default function(state =[], action){
    switch(action.type){
        case FETCH_SERVICE:
        return state.concat([action.payload.data]);
        default: return state
    }
}

export const selectService = (state = [], action) => {
    switch(action.type){
        case SERVICES_SELECTED:
        console.log( state.concat([action.payload])+ " serviceLIst");
        return state.concat([action.payload]);
        default: return state
    }
}

