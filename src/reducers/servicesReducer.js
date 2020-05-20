import _ from 'lodash';
import {
    ADDED_SERVICE, APPROVED_SERVICE, EDITED_SERVICE, FETCHED_SERVICES
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        // case ADDED_SERVICE:
        //     return { ...state, ..._.mapKeys(action.payload, 'id') };
        case APPROVED_SERVICE:
            return [...state, action.payload];
        // case EDITED_SERVICE:
        //     return { ...state, [action.payload.id]: action.payload };
        case FETCHED_SERVICES:
            return action.payload
        default:
            return state;
    }
};
