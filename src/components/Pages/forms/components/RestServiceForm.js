import React, { PureComponent } from 'react'
import GeneralServiceform from '../components/GeneralServiceform'
// import axios from 'axios'
// import { BaseUrl } from '../../../../config'
import FileUploadInput from '../../../Commons/forms/FileUploadInput'
import { withRouter } from 'react-router'

export class RestServiceForm extends PureComponent {

    // async componentDidMount() {
    //     const { id } = this.props.match.params
    //     const { data } = await axios.get(`${BaseUrl}/api/createservice/soap/${id}`)
    //     this.setState({ title: data.serviceNameHeb })
    // }


    render() {
        const { selectedService } = this.props

        return (
            <div>

                < GeneralServiceform propsValue={{ swaggerFile: "", ...selectedService }} onFormSubmit={this.props.onFormSubmit} >
                    <FileUploadInput name="swaggerFile" title="swaggerFile" placeholder="swaggerFile" />


                </GeneralServiceform>

            </div>
        )
    }
}

export default withRouter(RestServiceForm)
