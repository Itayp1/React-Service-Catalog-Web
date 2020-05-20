import React, { PureComponent } from 'react'
import GeneralServiceform from '../components/GeneralServiceform'
// import axios from 'axios'
// import { BaseUrl } from '../../../../config'
import FileUploadInput from '../../../Commons/forms/FileUploadInput'
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { compose } from 'redux'




export class SoapServiceForm extends PureComponent {

    // async componentDidMount() {
    //     const { id } = this.props.match.params
    //     const { data } = await axios.get(`${BaseUrl}/api/createservice/soap/${id}`)
    //     this.setState({ title: data.serviceNameHeb })
    // }


    render() {
        const { selectedService } = this.props
        return (
            <div>

                < GeneralServiceform propsValue={{ wsdlFile: "", xsdFiles: "", ...selectedService }} onFormSubmit={this.props.onFormSubmit} >
                    <FileUploadInput name="wsdlFile" title="wsdlFile" placeholder="wsdlFile" />
                    <FileUploadInput name="xsdFiles" title="xsdFiles" placeholder="xsdFiles" />


                </GeneralServiceform>

            </div>
        )
    }
}

export default SoapServiceForm


// const mapStateToProps = (props, ownProps) => {
//     const { selectedService } = props
//     return { selectedService }
// };


// export default compose(
//     withRouter,
//     connect(mapStateToProps, null)
// )(SoapServiceForm);