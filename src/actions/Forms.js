import {
    ADDED_SERVICE, APPROVED_SERVICE, EDITED_SERVICE,
} from './types';
import api from '../apis/catalogApi'

    ;


export const addSoapServiceOnSubmit = serviceDetails => async dispatch => {

    const response = await api.post("/api/createservice/soap", serviceDetails)
    dispatch({ type: ADDED_SERVICE, payload: response.data });


}

export const addRestServiceOnSubmit = serviceDetails => async dispatch => {

    const response = await api.post("/api/createservice/rest", serviceDetails)
    dispatch({ type: ADDED_SERVICE, payload: response.data });


}

export const aproveSoapServiceOnSubmit = (serviceDetails, id) => async dispatch => {

    const response = await api.put(`/api/services/aprove/soap/${id}`, serviceDetails)


    dispatch({ type: APPROVED_SERVICE, payload: response.data });


}

export const aproveRestServiceOnSubmit = (serviceDetails, id) => async dispatch => {

    const response = await api.put(`/api/services/aprove/rest/${id}`, serviceDetails)


    dispatch({ type: APPROVED_SERVICE, payload: response.data });


}

