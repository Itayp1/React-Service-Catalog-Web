import React, { Component } from 'react'
import './CreateRestService.css'
class CreateRestService extends Component {
    state = {
        serviceNameEng: ""
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log('A name was submitted: ' + this.state.serviceNameEng);
    }

    render() {

        return (
            <div
                className="modal fade"
                id="CreateRestService"
                data-backdrop="static"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="CreateRestServiceLabel"
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
                                REST הקמת שירות
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

                            <form onSubmit={this.onFormSubmit}>
                                <div className="form-group ">

                                    <label htmlFor="serviceNameHeb">שם השירות בעברית</label>
                                    <input type="text" className="form-control" id="serviceNameHeb" aria-describedby="emailHelp" placeholder="הכנס את שם השירות בעברית " />

                                    <label htmlFor="serviceNameEng">שם השירות באנגלית</label>
                                    <input type="text" onChange={(event) => this.setState({ serviceNameEng: event.target.value })} className="form-control" id="serviceNameEng" placeholder="הכנס את שם השירות באנגלית" />
                                    <label htmlFor="serviceUrl">כתובת השירות </label>
                                    <input type="text" className="form-control" id="serviceUrl" placeholder=" https://icp-int.menora.co.il הכנס את כתובת השירות לדוגמה " />
                                    <label htmlFor="businessOwner">מנהל עסקי </label>
                                    <input type="text" className="form-control" id="businessOwner" placeholder="שם המנהל העסקי של השירות " />
                                    <label htmlFor="techOwner">מנהל טכני </label>
                                    <input type="text" className="form-control" id="techOwner" placeholder="שם המנהל הטכני של השירות " />


                                    <div className="input-group space">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">תיאור השירות</span>
                                        </div>
                                    </div>

                                    <div className="input-group mb-3" >

                                        <label className="custom-file-label" htmlFor="inputGroupFile01">במידה וקיים יש להעלות את אפיון השירות </label>
                                        <input type="file" id="inputGroupFile01" />


                                    </div>

                                </div>
                                <input className="btn  btn-primary" type="submit" value="Submit" />



                            </form>
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default CreateRestService;
