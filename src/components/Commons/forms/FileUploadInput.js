import React from 'react'

const FileUploadInput = ({ name, touched, errors, handleChange, handleBlur, values, placeholder = "", title, setFieldValue }) => {

    return (
        <div className="mt-4">
            <div className="input-group mt-4" >
                <label
                    style={{ textAlign: "center" }
                    } className="custom-file-label"
                    htmlFor={name}>{title}</label>
                <input
                    type="file"
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    // value={values[name]}
                    onChange={(event) => {
                        setFieldValue(name || "file", event.currentTarget.files[0], event.currentTarget.files[0].name);
                    }}
                />

            </div>
            {touched[name] && errors[name] ? <div className="alert alert-danger">{errors[name]}</div> : null}
        </div>
    )

}









export default FileUploadInput;
