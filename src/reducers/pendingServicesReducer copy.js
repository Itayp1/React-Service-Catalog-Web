import {
    ADDED_SERVICE, APPROVED_SERVICE, EDITED_SERVICE, FETCHED_PENDING_SERVICES
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case ADDED_SERVICE:
            return [action.payload, ...state];
        case APPROVED_SERVICE:
            return state.filter(({ serviceNameHeb }) => serviceNameHeb !== action.payload.serviceNameHeb)
        case EDITED_SERVICE:
            return state.map((service) => service.serviceNameHeb === action.payload.serviceNameHeb ? action.payload : service)
        case FETCHED_PENDING_SERVICES:
            return action.payload


        default:
            return state;
    }
};
