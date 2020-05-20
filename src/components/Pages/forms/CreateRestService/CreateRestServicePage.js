import React, { PureComponent } from 'react'
import RestServiceForm from '../components/RestServiceForm'
import { connect } from 'react-redux';
import { addRestServiceOnSubmit } from '../../../../actions';

export class CreateRestServicePage extends PureComponent {
    routeToServiceUri = (props) => {





        this.props.history.push("/services/pendingapproval")
        this.props.addRestServiceOnSubmit(props)
    }

    render() {
        return (
            <div>
                <h1 className="text-center">יצירת שירות REST </h1>
                < RestServiceForm onFormSubmit={this.routeToServiceUri} />

            </div>
        )
    }
}
export default connect(null, { addRestServiceOnSubmit })(CreateRestServicePage)

