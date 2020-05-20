import React, { Component } from "react";

import soap from '../../../../images/soap.png'
import rest from '../../../../images/rest.png'

const image = { soap, rest }
// return <RestCard key={i} serviceNameHeb={serviceNameHeb} serviceNameEng={serviceNameEng} serviceUrl={serviceUrl} details={details} />

export default class ServiceCard extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ margin: 10, width: "18rem", textAlign: "center" }}
      >
        <img src={image[this.props.type]} className="card-img-top" alt="img" />

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
