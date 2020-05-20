import React, { PureComponent } from 'react'
import SoapServiceForm from '../components/SoapServiceForm'
import { connect } from 'react-redux';
import { addSoapServiceOnSubmit } from '../../../../actions';

export class CreateSoapServicePage extends PureComponent {

    routeToServiceUri = (props) => {





        this.props.history.push("/services/pendingapproval")
        this.props.addSoapServiceOnSubmit(props)
    }
    render() {
        return (
            <div>
                <h1 className="text-center">יצירת שירות SOAP </h1>
                < SoapServiceForm onFormSubmit={this.routeToServiceUri} />

            </div>
        )
    }
}
export default connect(null, { addSoapServiceOnSubmit })(CreateSoapServicePage)





