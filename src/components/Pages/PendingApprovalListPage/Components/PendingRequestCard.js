import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import soap from '../../../../images/soap.png'
import rest from '../../../../images/rest.png'

const image = { soap, rest }
// return <RestCard key={i} serviceNameHeb={serviceNameHeb} serviceNameEng={serviceNameEng} serviceUrl={serviceUrl} details={details} />

export default class PendingRequestCard extends Component {
    render() {
        const { serviceNameEng, serviceNameHeb, type } = this.props
        return (
            <div
                className="card"
                style={{ margin: 10, width: "18rem", textAlign: "center" }}
            >
                <img src={image[type]} className="card-img-top" alt="img" />

                <div className="card-body">
                    <h5 className="card-title">{serviceNameEng}</h5>
                    <p className="card-text">{serviceNameHeb}</p>
                    <NavLink
                        to={`/services/status/${type}/${serviceNameEng}`}
                        data-target="#staticBackdrop"
                        className="btn btn-primary" >

                        סטטוס הבקשה</NavLink>


                </div>
            </div>
        );
    }
}
