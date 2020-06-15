import React, { Component } from 'react'
import GeneralServiceform from '../forms/components/GeneralServiceform'
import NotFound from "../NotFound/NotFound"
import { connect } from 'react-redux';
import { fetchSoapService } from '../../../actions';
import "./SoapService.css"
import wsdl from '../../../images/wsdl.png'
import { BaseUrl } from '../../../config'
export class SoapServicePage extends Component {




    async componentDidMount() {
        const { serviceNameEng } = this.props.match.params

        this.props.fetchSoapService(serviceNameEng)

    }


    render() {
        // return <PlaceHolder />

        const { selectedService } = this.props
        const { serviceNameEng } = this.props.match.params

        if (selectedService.status) {
            return <> <NotFound /></>
        }

        return (
            <div>
                <h1 className="text-center"> {selectedService && selectedService.serviceNameHeb} </h1>
                < GeneralServiceform propsValue={{ ...selectedService }} disableEdit={true} />

                <div style={{ textAlign: "center" }}>

                    <a href={`${BaseUrl}/api/services/getFile/${serviceNameEng}.wsdl`} target="_blank">
                        <img src={wsdl} title="wsdl" className="img-fluid  soapService" alt="wsdl" />
                    </a>


                    <a href={`${BaseUrl}/api/services/getFile/${serviceNameEng}.docx`} target="_blank">
                        <button type="button" class="btn btn-primary btn-lg soapService">אפיון השירות</button>

                    </a>
                </div>

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




