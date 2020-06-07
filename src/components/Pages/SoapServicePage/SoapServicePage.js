import React, { Component } from 'react'
import GeneralServiceform from '../forms/components/GeneralServiceform'
import NotFound from "../NotFound/NotFound"
import { connect } from 'react-redux';
import { fetchSoapService } from '../../../actions';

export class SoapServicePage extends Component {




    async componentDidMount() {
        const { serviceNameEng } = this.props.match.params
        this.props.fetchSoapService(serviceNameEng)

    }


    render() {
        // return <PlaceHolder />

        const { selectedService } = this.props
        if (selectedService.status) {
            return <> <NotFound /></>
        }

        return (
            <div>
                <h1 className="text-center"> {selectedService && selectedService.serviceNameHeb} </h1>
                < GeneralServiceform propsValue={{ ...selectedService }} disableEdit={true} />



            </div>
        )
    }
}
const mapStateToProps = (props, ownProps) => {
    // const { selectedService:{backendUrl ,businessOwner ,serviceDetails , serviceNameEng , serviceNameHeb , techOwner}} = props
    const { selectedService } = props
    //  selectedService.status ? 

    return { selectedService }
};

export default connect(mapStateToProps, { fetchSoapService })(SoapServicePage)




