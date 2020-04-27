import React, { Component } from "react";
import RestCardDetails from "./RestCardDetails";
import "./RestCard.css"

export default class RestCard extends Component {
  render() {
    return (
      <div
        className="card cardCatalog" id="cardCatalog"
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
            פרטים נוספים
          </button>
        </div>
        <RestCardDetails serviceName="FileConversion" />
      </div>
    );
  }
}
