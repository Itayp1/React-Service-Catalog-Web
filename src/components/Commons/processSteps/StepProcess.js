import React from 'react'
import './StepProcess.css'
import ProcesStepLists from './ProcesStepLists'



const stepList = (ListodSteps, stepStatus) => {
    const newListOfSteps = ListodSteps.map(({ title, value }, i) => {
        return <li key={i} className={`step-item  ${value === stepStatus ? "active" : null}`}>
            <a href="#!" className="">{title}</a>
        </li>
    })

    return newListOfSteps
}

const processSteps = ({ status, stepStatus }) => {


    return (
        <div className="container">
            <div className="mt-5 mb-5 text-center">
                <h2>סטטוס הקמת השירות</h2>
            </div>
            <ul className="step d-flex flex-nowrap">
                {stepList(ProcesStepLists[status], stepStatus)}
            </ul>

        </div>
    )

}

export default processSteps;