import React, { PureComponent } from 'react'
import RestServiceForm from '../components/RestServiceForm'
import { connect } from 'react-redux';
import { fetchPendingRestService, aproveRestServiceOnSubmit } from '../../../../actions';

export class ConfirmationRestServicePage extends PureComponent {
    state = { title: "" };

    async componentDidMount() {
        const { id } = this.props.match.params

        this.props.fetchPendingRestService(id)
    }


    routeToServiceUri = (props) => {

        const { id } = this.props.match.params
        this.props.aproveRestServiceOnSubmit(props, id)
        this.props.history.push("/services")

    }

    render() {

        const { selectedService } = this.props

        return (

            // <PlaceHolder />

            <div>

                <h1 className="text-center"> REST אישור שירות </h1>
                <h1 className="text-center"> {this.state.title} </h1>
                < RestServiceForm onFormSubmit={this.routeToServiceUri} selectedService={selectedService} />



            </div>
        )

    }
}

const mapStateToProps = (props, ownProps) => {

    const { selectedService } = props
    return { selectedService }
};

export default connect(mapStateToProps, { fetchPendingRestService, aproveRestServiceOnSubmit })(ConfirmationRestServicePage)




