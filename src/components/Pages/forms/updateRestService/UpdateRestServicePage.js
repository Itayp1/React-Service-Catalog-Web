import React, { PureComponent } from 'react'
import GeneralServiceform from '../components/GeneralServiceform'


export class UpdateRestServicePage extends PureComponent {
    render() {
        return (
            <div>
                <h1 className="text-center">יצירת שירות SOAP </h1>
                < GeneralServiceform propsValue={{ something: "", something2: "", something3: "" }}>

                </GeneralServiceform>

            </div>
        )
    }
}

export default UpdateRestServicePage
