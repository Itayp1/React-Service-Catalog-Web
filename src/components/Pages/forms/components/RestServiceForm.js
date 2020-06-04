import React, { PureComponent } from 'react'
import GeneralServiceform from '../components/GeneralServiceform'
import FileUploadInput from '../../../Commons/forms/FileUploadInput'

export class RestServiceForm extends PureComponent {

    render() {
        const { selectedService } = this.props
        return (
            <div>
                < GeneralServiceform propsValue={{ swaggerFile: "", ...selectedService }} onFormSubmit={this.props.onFormSubmit}>
                    <FileUploadInput name="swaggerFile" title="swaggerFile" placeholder="swaggerFile" />
                </GeneralServiceform>
            </div>
        )
    }
}

export default RestServiceForm