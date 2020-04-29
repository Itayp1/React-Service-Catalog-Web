import React, { Component } from "react";

class RestCardDetails extends Component {
  serviceName = this.props.serviceName;
  url = "https://xgwint.menora.co.il:9450/FileConversion";
  componentDidMount() {
    window.$('[data-toggle="tooltip"]').tooltip();
  }

  componentDidUpdate() {
    window.$('[data-toggle="tooltip"]').tooltip();
  }
  render() {
    return (
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title"
                id="staticBackdropLabel"
                style={{ margin: "auto" }}
              >
                {this.serviceName}
              </h1>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <h3>שירות המרת מסמכים</h3>

                <p>השירות מקבל מסמכים וממיר אותם לפורמט המבוקש</p>
                <p className="text-right ">כתובת השירות </p>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="copy to clipboard"
                    style={{ height: "30px" }}
                    onClick={() => {
                      var copyText = document.getElementById("serviceUrl");

                      copyText.select();
                      document.execCommand("copy");
                    }}
                  >
                    copy
                  </button>
                  <input
                    style={{ width: "400px", marginTop: "2px" }}
                    defaultValue={this.url}
                    type="text"
                  // id="serviceUrl"
                  // style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestCardDetails;
