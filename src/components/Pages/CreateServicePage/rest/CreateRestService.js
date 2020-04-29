import React, { Component } from 'react'
import '../CreateService.css'
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
            <div className="container">

                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">

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
                            {/* <textarea className="form-control" aria-label="With textarea"></textarea>
                            <div className="input-group-prepend">
                                <span className="input-group-text">תיאור השירות</span>
                            </div> */}
                        </div>


                        <div className="input-group mb-3" >
                            <label style={{ textAlign: "center" }} className="custom-file-label" htmlFor="inputGroupFile01">במידה   וקיים יש להעלות את אפיון השירות </label>
                            <input type="file" id="inputGroupFile01" />


                        </div>

                    </div>



                    <input className="btn  btn-primary float-right " type="submit" value="המשך" />
                </form>
            </div>
        )
    }
}
export default CreateRestService;
