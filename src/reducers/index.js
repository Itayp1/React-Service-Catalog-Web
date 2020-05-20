import { combineReducers } from 'redux';
import pendingServicesReducer from './pendingServicesReducer';
import servicesReducer from './servicesReducer';
import selectedServiceReducer from './selectedServiceReducer';

export default combineReducers({
  pendingServices: pendingServicesReducer,
  services: servicesReducer,
  selectedService: selectedServiceReducer
});
