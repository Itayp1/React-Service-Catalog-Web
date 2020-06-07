import React from 'react'



const getFilesNames = (files) => {
    // console.log(files)
    let filesarr = ""
    for (const file in files) {
        if (!isNaN(file)) {
            filesarr += `   ${files[file].name}     `
        }
    }

    return filesarr
}



const MultiFileUploadInput = ({ name, touched, errors, handleChange, handleBlur, values, placeholder = "", title, setFieldValue }) => {
    const fileName = values[name];

    return (

        <div className="custom-file mt-4" >

            <input
                type="file"
                name={name}
                id={name}
                multiple
                className="custom-file-input"
                placeholder={placeholder}

                onBlur={handleBlur}

                onChange={(event) => {

                    setFieldValue(name, event.currentTarget.files);
                }}
            />
            <label className="custom-file-label" htmlFor="customFile" style={{ textAlign: "center" }}>{fileName ? getFilesNames(fileName) : title}</label>

            {touched[name] && errors[name] ? <div className="alert alert-danger" htmlFor={name}>{errors[name]}</div> : null}
        </div>
    )

}










export default MultiFileUploadInput;
