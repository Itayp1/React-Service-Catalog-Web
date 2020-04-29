import React, { PureComponent } from 'react'
import GeneralServiceform from '../components/GeneralServiceform'


export class CreateRestServicePage extends PureComponent {
    render() {
        return (
            <div>
                <h1 className="text-center">יצירת שירות REST </h1>
                < GeneralServiceform propsValue={{ something: "", something2: "", something3: "" }}>

                </GeneralServiceform>

            </div>
        )
    }
}

export default CreateRestServicePage
