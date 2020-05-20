import React, { PureComponent } from 'react'
import SoapServiceForm from '../components/SoapServiceForm'
import TextInput from '../../../Commons/forms/TextInput'
import axios from 'axios'
import { BaseUrl } from '../../../../config'
import PlaceHolder from '../components/../../../Commons/Placeholder'
// import { Placeholder } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchPendingSoapeService, aproveSoapServiceOnSubmit } from '../../../../actions';

export class ConfirmationSoapServicePage extends PureComponent {

    state = { title: "" };


    routeToServiceUri = (props) => {

        this.props.history.push("/services")
        const { id } = this.props.match.params

        this.props.aproveSoapServiceOnSubmit(props, id)
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchPendingSoapeService(id)
        // this.props.history.push("/services/pendingapproval")


        // const { data } = await axios.get(`${BaseUrl}/api/services/pending/soap/${id}`)
        // this.setState({ title: data[0].serviceNameHeb })
    }


    render() {

        // return <PlaceHolder />

        const { selectedService } = this.props



        return (
            <div>

                <h1 className="text-center"> soap אישור שירות </h1>
                <h1 className="text-center"> {this.state.title} </h1>
                < SoapServiceForm onFormSubmit={this.routeToServiceUri} selectedService={selectedService} />



            </div>
        )
    }
}
const mapStateToProps = (props, ownProps) => {
    const { selectedService } = props
    return { selectedService }
};

export default connect(mapStateToProps, { fetchPendingSoapeService, aproveSoapServiceOnSubmit })(ConfirmationSoapServicePage)




