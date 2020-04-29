import React from 'react'
import './ProcessSteps.css'
const list = [
    { title: "ממתין להשלמת נתונים של הלקוח", status: "false" },
    { title: "ממתין לאישור", status: "false" },
    { title: "השירות בהקמה", status: true },
    { title: "חשיפה הסתיימה", status: "false" },

]



const stepList = (ListodSteps) => {
    const newListOfSteps = ListodSteps.map(({ title, status }, i) => {
        return <li class={`step-item  ${status === true ? "active" : null}`}>
            <a href="#!" class="">{title}</a>
        </li>
    })

    return newListOfSteps
}

const processSteps = () => {


    return (
        <div class="container">
            <div class="mt-5 mb-5 text-center">
                <h2>סטטוס הקמת השירות</h2>
            </div>
            <ul class="step d-flex flex-nowrap">
                {stepList(list)}
            </ul>

            <div class="text-muted mt-5 text-center small">by : <a class="text-muted" target="_blank" href="http://totoprayogo.com">totoprayogo.com</a></div>
        </div>
    )

}

export default processSteps;