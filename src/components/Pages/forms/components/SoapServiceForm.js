import React, { PureComponent } from 'react'
import GeneralServiceform from '../components/GeneralServiceform'
import FileUploadInput from '../../../Commons/forms/FileUploadInput'
// import MultiFileUploadInput from '../../../Commons/forms/MultiFileUploadInput'

export class SoapServiceForm extends PureComponent {

    render() {
        const { selectedService } = this.props
        return (
            <div>
                < GeneralServiceform propsValue={{ wsdlFile: "", xsdFiles: "", ...selectedService }} onFormSubmit={this.props.onFormSubmit} >
                    <FileUploadInput name="wsdlFile" title="wsdlFile" placeholder="wsdlFile" />
                    <FileUploadInput name="xsdFile" title="xsdFile" placeholder="xsdFile" />

                    {/* <MultiFileUploadInput name="xsdFiles" title="xsdFiles" placeholder="xsdFiles" /> */}
                </GeneralServiceform>
            </div>
        )
    }
}

export default SoapServiceForm

