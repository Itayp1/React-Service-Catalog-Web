import React, { Component } from 'react'
import GeneralServiceform from '../forms/components/GeneralServiceform'
import swagger from '../../../images/swagger.png'
import "./RestService.css"
import { connect } from 'react-redux';
import { fetchRestService } from '../../../actions';
import { BaseUrl } from '../../../config'

export class RestServicePage extends Component {




    async componentDidMount() {
        const { serviceNameEng } = this.props.match.params
        this.props.fetchRestService(serviceNameEng)

    }


    render() {

        // return <PlaceHolder />

        const { serviceNameEng } = this.props.match.params
        const { selectedService } = this.props


        return (
            <div className="container">

                <h1 className="text-center"> {selectedService && selectedService.serviceNameHeb} </h1>
                < GeneralServiceform propsValue={{ ...selectedService }} disableEdit={true} />

                <div style={{ textAlign: "center" }}>

                    <a href={`${BaseUrl}/api/api-docs/${serviceNameEng}`} target="_blank">
                        <img src={swagger} title="swagger" className="img-fluid rounded restService" alt="swagger" />
                    </a>


                    <a href={`${BaseUrl}/api/services/getFile/${serviceNameEng}.docx`} target="_blank">
                        <button type="button" class="btn btn-primary btn-lg restService">אפיון השירות</button>

                    </a>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (props, ownProps) => {
    // const { selectedService:{backendUrl ,businessOwner ,serviceDetails , serviceNameEng , serviceNameHeb , techOwner}} = props
    const { selectedService } = props

    return { selectedService }
};

export default connect(mapStateToProps, { fetchRestService })(RestServicePage)




