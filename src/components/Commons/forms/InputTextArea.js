import React from 'react'


const InputTextArea = ({ name, touched, errors, handleChange, handleBlur, values, placeholder = "", title }) => {

    return (
        <div className="mt-2">
            <div className="input-group space">
                <textarea className="form-control" rows="3" cols="33" aria-label="With textarea" id="serviceDetails" name="serviceDetails"
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                />

                <span className="input-group-text">{title}</span>



            </div>
            {touched[name] && errors[name] ? <div className="alert alert-danger">{errors[name]}</div> : null}
        </div>
    )

}


export default InputTextArea;
