
import _ from 'lodash'
import {
    FETCHED_PENDING_SERVICES, FETCHED_SERVICES, SELECTED_SERVICE
} from './types';
import api from '../apis/catalogApi'



export const fetchPendingServices = () => dispatch => {

    _fetchPendingServices(dispatch)


}

const _fetchPendingServices = _.memoize(async (dispatch) => {
    const response = await api.get("/api/services/pending")

    dispatch({ type: FETCHED_PENDING_SERVICES, payload: response.data });
}

)
export const fetchServices = () => dispatch => {

    _fetchServices(dispatch)

}

const _fetchServices = _.memoize(async (dispatch) => {
    const response = await api.get("/api/services")
    dispatch({ type: FETCHED_SERVICES, payload: response.data });
})

export const fetchPendingRestService = id => async dispatch => {
    const response = await api.get(`/api/services/pending/rest/${id}`)
    dispatch({ type: SELECTED_SERVICE, payload: response.data })
}

export const fetchPendingSoapeService = id => async dispatch => {
    const response = await api.get(`/api/services/pending/soap/${id}`)

    dispatch({ type: SELECTED_SERVICE, payload: response.data })
}

export const fetchPendingServiceStatus = (type, serviceNameEng) => async dispatch => {
    const response = await api.get(`/api/services/status/${type}/${serviceNameEng}`)



    dispatch({ type: SELECTED_SERVICE, payload: response.data })
}

export const fetchRestService = serviceNameEng => async dispatch => {
    const response = await api.get(`/api/services/rest/${serviceNameEng}`)



    dispatch({ type: SELECTED_SERVICE, payload: response.data })
}
// export const AddRestServiceOnSubmit =serviceDetails =>  async dispatch =>{

//     // const response = api.get()
// }