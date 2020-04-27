import React from 'react'

const FileUploadInput = ({ name, touched, errors, handleChange, handleBlur, values, placeholder = "", title }) => {

    return (
        <div className="mt-4">
            <div className="input-group mt-4" >
                <label
                    style={{ textAlign: "center" }
                    } className="custom-file-label"
                    htmlFor={name}>{title}</label>
                <input
                    type="file"
                    id="inputGroupFile01"
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                />

            </div>
            {touched[name] && errors[name] ? <div className="alert alert-danger">{errors[name]}</div> : null}
        </div>
    )

}



export default FileUploadInput;
