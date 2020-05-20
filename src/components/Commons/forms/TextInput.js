import React from 'react'

const TextInput = ({ name, touched, errors, handleChange, handleBlur, values, placeholder = "", title, disableEdit }) => {

    return (
        <div className="mt-2">
            <label htmlFor={name}>{title}</label>
            <input
                type="text"
                className="form-control"
                name={name}
                id={name}
                aria-describedby="emailHelp"
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
                disabled={disableEdit}

            />
            {touched[name] && errors[name] ? <div className="alert alert-danger">{errors[name]}</div> : null}


        </div>
    )

}


export default TextInput;
