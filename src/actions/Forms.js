import {
    ADDED_SERVICE, APPROVED_SERVICE, EDITED_SERVICE,
} from './types';
import api from '../apis/catalogApi'

    ;
import { fetchServices } from './services';


export const addSoapServiceOnSubmit = serviceDetails => async dispatch => {

    const fd = new FormData();
    if (serviceDetails.serviceDetailsFile) {
        fd.append("serviceDetailsFile", serviceDetails.serviceDetailsFile, "serviceDetailsFile")

    }
    if (serviceDetails.wsdlFile) {
        fd.append("wsdlFile", serviceDetails.wsdlFile, "wsdlFile")

    }
    if (serviceDetails.xsdFile) {

        fd.append("xsdFile", serviceDetails.xsdFile, "xsdFile")
    }
    fd.append("json", JSON.stringify(serviceDetails))
    const response = await api.post("/api/createservice/soap", fd)
    dispatch({ type: ADDED_SERVICE, payload: response.data });


}

export const addRestServiceOnSubmit = serviceDetails => async dispatch => {

    const fd = new FormData();
    if (serviceDetails.serviceDetailsFile) {
        fd.append("serviceDetailsFile", serviceDetails.serviceDetailsFile, "serviceDetailsFile")

    }
    if (serviceDetails.swaggerFile) {

        fd.append("swaggerFile", serviceDetails.swaggerFile, "swaggerFile")
    }
    fd.append("json", JSON.stringify(serviceDetails))
    const response = await api.post("/api/createservice/rest", fd)
    dispatch({ type: ADDED_SERVICE, payload: response.data });


}

export const aproveSoapServiceOnSubmit = (serviceDetails, id) => async dispatch => {



    const response = await api.put(`/api/services/aprove/soap/${id}`, serviceDetails)
    dispatch({ type: ADDED_SERVICE, payload: response.data });

    dispatch({ type: APPROVED_SERVICE, payload: response.data });


}

export const aproveRestServiceOnSubmit = (serviceDetails, id) => async dispatch => {

    const response = await api.put(`/api/services/aprove/rest/${id}`, serviceDetails)
    dispatch({ type: ADDED_SERVICE, payload: response.data });
    dispatch({ type: APPROVED_SERVICE, payload: response.data });


}

