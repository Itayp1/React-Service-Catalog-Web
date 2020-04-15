import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
// return <RestCard key={i} serviceNameHeb={serviceNameHeb} serviceNameEng={serviceNameEng} serviceUrl={serviceUrl} details={details} />

export default class PendingRequestCard extends Component {
    render() {
        return (
            <div
                className="card"
                style={{ margin: 10, width: "18rem", textAlign: "center" }}
            >
                <img src="rest.png" className="card-img-top" alt="rest" />

                <div className="card-body">
                    <h5 className="card-title">{this.props.serviceNameEng}</h5>
                    <p className="card-text">{this.props.serviceNameHeb}</p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#staticBackdrop"
                    >
                        סטטוס הבקשה
          </button>
                </div>
            </div>
        );
    }
}
