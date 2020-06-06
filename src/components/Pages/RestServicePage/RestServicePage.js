import React, { Component } from 'react'
import GeneralServiceform from '../forms/components/GeneralServiceform'

import { connect } from 'react-redux';
import { fetchRestService } from '../../../actions';

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
            <div>
                {console.log(selectedService)}
                <h1 className="text-center"> {selectedService && selectedService.serviceNameHeb} </h1>
                < GeneralServiceform propsValue={{ ...selectedService }} disableEdit={true} />
                <a href={`http://localhost:3000/api/api-docs/${serviceNameEng}`} target="_blank">Swagger</a>



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




