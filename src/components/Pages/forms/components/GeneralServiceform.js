import React, { Component } from 'react'
import '../CreateService.css'
import { Formik } from 'formik'
// import axios from 'axios';
import * as Yup from "yup"
import TextInput from '../../../Commons/forms/TextInput'
import InputTextArea from '../../../Commons/forms/InputTextArea'
import FileUploadInput from '../../../Commons/forms/FileUploadInput'

const validationSchema = Yup.object().shape({
    serviceNameHeb: Yup.string().max(30).required().label(" "),
    serviceNameEng: Yup.string().max(30).required().label(" "),
    backendUrl: Yup.string().max(30).required().label(" "),
    businessOwner: Yup.string().max(30).required().label(" "),
    techOwner: Yup.string().max(30).required().label(" "),
    serviceDetails: Yup.string().max(30).required().label(" "),
    // wsdlFile: Yup.string().max(3).required().label(" "),
    // xsdFiles: Yup.string().max(3).required().label(" "),
    // swaggerFile: Yup.string().max(3).required().label(" ")

})

class GeneralServiceform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceNameEng: "",
            selectedFile: null
        }
    }
    onFormSubmit = (event) => {
        event.preventDefault();
    }

    renderChildren = (properites) => {
        return Array.isArray(this.props.children) ? this.props.children.map((child, i) => {
            return React.cloneElement(child, { ...properites, key: i })
        }) : React.cloneElement(this.props.children, { ...properites })
    }

    render() {

        const { onFormSubmit, propsValue, disableEdit = false } = this.props

        return (
            <div className="container">
                <Formik enableReinitialize initialValues={{ serviceNameHeb: "", serviceNameEng: "", backendUrl: "", businessOwner: "", techOwner: "", serviceDetails: "", ...propsValue }}
                    validationSchema={validationSchema} onSubmit={onFormSubmit}
                >
                    {({ handleSubmit, ...properites }) => (
                        <form onSubmit={handleSubmit}>

                            {properites.disableEdit = disableEdit}
                            <div className="form-group">

                                <TextInput name="serviceNameHeb" title="שם השירות בעברית" placeholder="הכנס את שם השירות בעברית "  {...properites} />
                                <TextInput name="serviceNameEng" title="שם השירות באנגלית" placeholder="הכנס את שם השירות באנגלית "  {...properites} />
                                <TextInput name="backendUrl" title="כתובת השירות" placeholder="https://icp-int.menora.co.il הכנס את כתובת השירות לדוגמה"  {...properites} />
                                <TextInput name="businessOwner" title="מנהל עסקי" placeholder="שם המנהל העסקי של השירות"  {...properites} />
                                <TextInput name="techOwner" title="מנהל טכני" placeholder="שם המנהל הטכני של השירות"  {...properites} />
                                <InputTextArea name="serviceDetails" title="תיאור השירות"  {...properites} />
                                {!disableEdit && <FileUploadInput name="serviceDetailsFile" title="במידה   וקיים יש להעלות את אפיון השירות" {...properites} />}

                                {this.props.children ? this.renderChildren(properites) : null}


                            </div>

                            {!disableEdit && <button type="submit" disabled={Object.keys(properites.errors).length || properites.values.serviceNameHeb === ""} className="btn  btn-primary float-right">המשך</button>}


                        </form>
                    )}
                </Formik>

            </div>
        )
    }
}
export default GeneralServiceform;
