import React, { Component } from "react";
import PendingRequestCard from "../../PendingRequestCard";
import axios from 'axios'
export class PendingRequestList extends Component {

    state = { rest: [] }
    async  componentDidMount() {
        const response = await axios.get("http://localhost:3000/api/services/")

        this.setState({ rest: response.data.Rest })

    }

    servicesList = () => {

        const listOfServices = this.state.rest.map(({ serviceNameHeb, serviceNameEng, serviceUrl, details }, i) => {

            return <PendingRequestCard key={i} serviceNameHeb={serviceNameHeb} serviceNameEng={serviceNameEng} serviceUrl={serviceUrl} details={details} />
        })
        return <>{listOfServices}</>
    }
    render() {
        return (
            <div className="container-fluid" style={{ margin: "px 0px" }}>
                <div className="row">
                    {this.servicesList()}

                </div>
            </div>
        );
    }
}

export default PendingRequestList;
