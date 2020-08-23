import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const host_url = 'http://127.0.0.1:8080';
const url = host_url + '/current-date';
export class LocalDateWrapper{
    constructor(year, month, day) {
         this.year = year;
         this.month  = month;
        this.day  = day;
    };
}
class Datepicker extends Component {
    state = {
        startDate: new Date()
    };


    render() {
        const { startDate } = this.state;
        return <DatePicker selected={startDate} onChange={this.handleChange} />;
    }

    handleChange = startDate => {
        console.log('Problem ' + JSON.stringify(new LocalDateWrapper(startDate)));
        this.setState({
            startDate
        });

        fetch(url+startDate.getTime(), {
            method: 'GET',
            mode: 'cors',

        })
            .then(response => {

                if(response.ok) {
                    return response.json();
                } else {
                    console.log('Error');
                }
            })
            .catch(error => console.log('Error' + error))
    };
}

export default Datepicker;