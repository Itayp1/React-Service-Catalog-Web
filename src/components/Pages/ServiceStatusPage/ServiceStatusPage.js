import React, { Component } from 'react'
import GeneralServiceform from '../forms/components/GeneralServiceform'

import { connect } from 'react-redux';
import { fetchPendingServiceStatus } from '../../../actions';
import StepProcess from '../../Commons/processSteps/StepProcess'

export class ServiceStatusPage extends Component {

    state = { title: "" };



    async componentDidMount() {
        const { serviceNameEng, type } = this.props.match.params
        this.props.fetchPendingServiceStatus(type, serviceNameEng)

    }


    render() {

        // return <PlaceHolder />

        const { status } = this.props.match.params
        const { selectedService } = this.props
        const { status: stepStatus } = selectedService

        console.log(selectedService)
        // selectedService.disableForm = true

        return (
            <div>
                <h1 className="text-center"> סטטוס השירות </h1>
                <StepProcess status={status} stepStatus={stepStatus} />
                <h1 className="text-center"> {this.state.title} </h1>
                < GeneralServiceform propsValue={{ ...selectedService }} disableEdit={true} />



            </div>
        )
    }
}
const mapStateToProps = (props, ownProps) => {
    // const { selectedService:{backendUrl ,businessOwner ,serviceDetails , serviceNameEng , serviceNameHeb , techOwner}} = props
    const { selectedService } = props

    return { selectedService }
};

export default connect(mapStateToProps, { fetchPendingServiceStatus })(ServiceStatusPage)




