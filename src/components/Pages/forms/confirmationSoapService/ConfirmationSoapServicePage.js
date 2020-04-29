import React, { PureComponent } from 'react'
import GeneralServiceform from '../components/GeneralServiceform'
import TextInput from '../../../Commons/forms/TextInput'


export class ConfirmationSoapServicePage extends PureComponent {
    render() {
        return (
            <div>
                <h1 className="text-center"> soap אישור שירות </h1>
                < GeneralServiceform propsValue={{ something: "", something2: "", something3: "" }}>
                    <TextInput name="something" title="something" placeholder="הכנס sdfsdfsdfית " />
                    <TextInput name="something2" title="something2" placeholder="הכנס sdfsdfsdfית " />
                    <TextInput name="something3" title="something3" placeholder="הכנס sdfsdfsdfית " />

                </GeneralServiceform>

            </div>
        )
    }
}

export default ConfirmationSoapServicePage
