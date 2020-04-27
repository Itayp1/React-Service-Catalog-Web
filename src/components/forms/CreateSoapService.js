import React, { Component } from 'react'
import './CreateService.css'
import { Formik } from 'formik'
// import axios from 'axios';
import * as Yup from "yup"
import TextInput from '../Commons/forms/TextInput'
import InputTextArea from '../Commons/forms/InputTextArea'
import FileUploadInput from '../Commons/forms/FileUploadInput'

const validationSchema = Yup.object().shape({
    serviceNameHeb: Yup.string().max(3).required().label(" "),
    serviceNameEng: Yup.string().max(3).required().label(" "),
    serviceUrl: Yup.string().max(20).required().label(" "),
    businessOwner: Yup.string().max(3).required().label(" "),
    techOwner: Yup.string().max(3).required().label(" "),
    serviceDetails: Yup.string().max(3).required().label(" ")

})


class CreateSoapService extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.state = {
            serviceNameEng: "",
            selectedFile: null

        }
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log('A name was submitted: ' + this.state.serviceNameEng);
    }
    handleSubmit(event) {
        console.log("event")
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
    }
    render() {

        return (
            <div className="container">
                <Formik initialValues={{ serviceNameHeb: "", serviceNameEng: "", serviceUrl: "", businessOwner: "", techOwner: "" }}
                    validationSchema={validationSchema}
                >
                    {(properites) => (
                        <form onSubmit={this.onFormSubmit}>

                            <div className="form-group">

                                <TextInput name="serviceNameHeb" title="שם השירות בעברית" placeholder="הכנס את שם השירות בעברית "  {...properites} />
                                <TextInput name="serviceNameEng" title="שם השירות באנגלית" placeholder="הכנס את שם השירות באנגלית "  {...properites} />
                                <TextInput name="serviceUrl" title="כתובת השירות" placeholder="https://icp-int.menora.co.il הכנס את כתובת השירות לדוגמה"  {...properites} />
                                <TextInput name="businessOwner" title="מנהל עסקי" placeholder="שם המנהל העסקי של השירות"  {...properites} />
                                <TextInput name="techOwner" title="מנהל טכני" placeholder="שם המנהל הטכני של השירות"  {...properites} />

                                <InputTextArea name="serviceDetails" title="תיאור השירות"  {...properites} />
                                <FileUploadInput name="inputGroupFile01" title="במידה   וקיים יש להעלות את אפיון השירות" {...properites} />
                                <FileUploadInput name="inputGroupFile01" title="WSDL לחץ כאן להוספת" {...properites} />
                                <FileUploadInput name="inputGroupFile01" title="במידה ויש XSD לחץ כאן להוספת" {...properites} />




                            </div>
                            <button type="button" disabled={!properites.dirty || Object.keys(properites.errors).length} className="btn  btn-primary float-right">המשך</button>


                        </form>
                    )}
                </Formik>

            </div>
        )
    }
}
export default CreateSoapService;
