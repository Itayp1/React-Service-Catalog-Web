import React, { Component } from "react";
import PendingRequestCard from "./Components/PendingRequestCard";
import { connect } from 'react-redux';
import { fetchPendingServices } from '../../../actions';

export class PendingRequestList extends Component {

    state = { services: [] }

    componentDidMount() {
        this.props.fetchPendingServices(1)


        // this.setState({ services: this.props.pendingServices })

    }

    // async  componentDidMount() {

    // }
    // componentWillReceiveProps(prevProps) {

    // }
    // componentWillUpdate(prevProps) {


    // }

    // componentWillUpdate(prevProps) {


    //     if (this.props.pendingServices.length !== prevProps.pendingServices.length) {
    //         this.setState({ services: this.props.pendingServices })
    //     }


    // }
    servicesList = (pendingServices) => {

        const listOfServices = pendingServices.map((properties, i) => {

            return <PendingRequestCard key={i}  {...properties} />
        })
        return <>{listOfServices}</>
    }



    render() {
        const { pendingServices } = this.props


        return (
            <div className="container-fluid" style={{ margin: "px 0px" }}>
                <div className="row">
                    {this.servicesList(pendingServices)}

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { pendingServices: state.pendingServices.map(ss => ss) }
};

export default connect(mapStateToProps, { fetchPendingServices })(PendingRequestList)


