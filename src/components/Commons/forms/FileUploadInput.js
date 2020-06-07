import React from 'react'

const FileUploadInput = ({ name, touched, errors, handleChange, handleBlur, values, placeholder = "", title, setFieldValue, multiple }) => {
    const fileName = values[name];

    return (

        <div className="custom-file mt-4" >

            <input
                type="file"
                name={name}
                id={name}
                multiple={multiple}
                className="custom-file-input"
                placeholder={placeholder}
                // onChange={handleChange}
                onBlur={handleBlur}
                // value={values[name]}
                onChange={(event) => {
                    setFieldValue(name, event.currentTarget.files[0], event.currentTarget.files[0].name);
                }}
            />
            <label className="custom-file-label" htmlFor="customFile" style={{ textAlign: "center" }}>{fileName ? fileName.name : title}</label>
            {touched[name] && errors[name] ? <div className="alert alert-danger" htmlFor={name}>{errors[name]}</div> : null}
        </div>
    )

}

// <div class="custom-file">
//   <input type="file" class="custom-file-input" id="customFile">
//   <label class="custom-file-label" for="customFile">Choose file</label>
// </div>








export default FileUploadInput;
