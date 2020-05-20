import React, { PureComponent } from 'react'
import GeneralServiceform from '../components/GeneralServiceform'
import axios from 'axios'
import { BaseUrl } from '../../../../config'
import PlaceHolder from '../components/../../../Commons/Placeholder'

import { connect } from 'react-redux';
import { fetchPendingRestService } from '../../../../actions';

export class ConfirmationRestServicePage extends PureComponent {
    state = { title: "" };

    async componentDidMount() {
        this.props.fetchPendingRestService()
    }


    render() {
        return <PlaceHolder />

        // return (
        //     <div>
        //         <h1 className="text-center"> REST אישור שירות </h1>
        //         {/* <h1 className="text-center"> {this.state.title} </h1> */}
        //         <PlaceHolder />

        //         < GeneralServiceform propsValue={{ something: "", something2: "", something3: "" }}>

        //         </GeneralServiceform>

        //     </div>
        // )
    }
}

const mapStateToProps = (props, ownProps) => {
    const { selectedService } = props
    return selectedService
};

export default connect(mapStateToProps, { fetchPendingRestService })(ConfirmationRestServicePage)




