import React, { Component } from "react";

import soap from '../../../../images/soap.png'
import rest from '../../../../images/rest.png'
import { NavLink } from "react-router-dom";

const image = { soap, rest }
// return <RestCard key={i} serviceNameHeb={serviceNameHeb} serviceNameEng={serviceNameEng} serviceUrl={serviceUrl} details={details} />

export default class ServiceCard extends Component {

  render() {
    const { serviceNameEng, type } = this.props

    return (
      <div
        className="card"
        style={{ margin: 10, width: "18rem", textAlign: "center" }}
      >
        <img src={image[this.props.type]} className="card-img-top" alt="img" />

        <div className="card-body">
          <h5 className="card-title">{this.props.serviceNameEng}</h5>
          <p className="card-text">{this.props.serviceNameHeb}</p>

          <NavLink
            to={`/services/${type}/${serviceNameEng}`}
            data-target="#staticBackdrop"
            className="btn btn-primary" >

            סטטוס הבקשה</NavLink>
        </div>
      </div>
    );
  }
}
