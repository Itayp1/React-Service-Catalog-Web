import React, { PureComponent } from 'react'
import GeneralServiceform from '../components/GeneralServiceform'


export class ConfirmationRestServicePage extends PureComponent {
    render() {
        return (
            <div>
                <h1 className="text-center"> REST אישור שירות </h1>
                < GeneralServiceform propsValue={{ something: "", something2: "", something3: "" }}>

                </GeneralServiceform>

            </div>
        )
    }
}

export default ConfirmationRestServicePage
