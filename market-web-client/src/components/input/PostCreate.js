import React from 'react'
import {Form, Field} from 'simple-react-form'
import {Textbox} from "react-inputs-validation";

export default class PostCreate extends React.PureComponent {
    state = {name: "User"}

    render() {
        return (
            <div>
                <Textbox
                    attributesInput={{ // Optional.
                        id: 'Number',
                        name: 'Number',
                        type: 'text', // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
                        placeholder: 'default internet ',
                    }}
                    value="" // Optional.[String].Default: "".
                    onChange={(number, e) => {
                        this.setState({ number });
                        console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                        type: 'number', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
                        min: 1, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                        max: 20 // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                        // mantissa: 2, // Optional.[Number].Default: -1. Number precision.
                    }}
                />
                <Textbox
                    attributesInput={{ // Optional.
                        id: 'Number',
                        name: 'Number',
                        type: 'text', // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
                        placeholder: 'default minutes',
                    }}
                    value="" // Optional.[String].Default: "".
                    onChange={(number, e) => {
                        this.setState({ number });
                        console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                        type: 'number', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
                        min: 5, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                        max: 100 // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                        // mantissa: 2, // Optional.[Number].Default: -1. Number precision.
                    }}
                />
                <Textbox
                    attributesInput={{ // Optional.
                        id: 'Number',
                        name: 'Number',
                        type: 'text', // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
                        placeholder: 'default sms',
                    }}
                    value="" // Optional.[String].Default: "".
                    onChange={(number, e) => {
                        this.setState({ number });
                        console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                        type: 'number', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
                        min: 5, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                        max: 20 // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                        // mantissa: 2, // Optional.[Number].Default: -1. Number precision.
                    }}
                />
            </div>
        )
    }
}
