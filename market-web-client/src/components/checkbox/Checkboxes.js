import React, { Component } from "react";
import Checkbox from "./Checkbox";
import {LocalDateWrapper} from "../Datepicker";

const OPTIONS = ["Internet", "Sms", "Minutes"];
const host_url = 'http://127.0.0.1:8080';
class Settings {
    constructor(year, month, day, product, cost, startApplySettingsDay) {
        this.year = year;
        this.month  = month;
        this.day  = day;
        this.product = product;
        this.startApplySettingsDay = startApplySettingsDay;
        this.cost = cost;
    };
}

class Product {
    constructor(smss, gigabytes, minutes) {
        this.smss = smss;
        this.gigabytes  = gigabytes;
        this.minutes  = minutes;
    };
}


class Checkboxes extends Component {
    state = {
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        )
    };

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            // BONUS: Can you explain why we pass updater function to setState instead of an object?
            this.setState(prevState => ({
                checkboxes: {
                    ...prevState.checkboxes,
                    [checkbox]: isSelected
                }
            }));
        });
    };

    selectAll = () => this.selectAllCheckboxes(true);

    deselectAll = () => this.selectAllCheckboxes(false);

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
                console.log(checkbox, "is selected.");
            });
    };

    createCheckbox = option => (
        <Checkbox
            label={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    save = () => {
            const url = host_url + '/settings?id=+79620000000';
            console.log("json" + JSON.stringify(new Settings(true, true, true,
                new Product(3,4,5), 15,25 )));


            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(new Settings(true, true, true,
                    new Product(3,4,5), 15,25 ))
            })
                .then(response => {

                    if(response.ok) {
                        return response.json();
                    } else {
                        console.log('Error');
                    }
                })
                .catch(error => console.log("Error"))
        }



    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleFormSubmit}>
                            {this.createCheckboxes()}

                            <div className="form-group mt-2">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary mr-2"

                                    onClick={this.selectAll}
                                >
                                    Select All
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary mr-2"
                                    onClick={this.deselectAll}
                                >
                                    Deselect All
                                </button>
                                <button type="submit" className="btn btn-primary"  onClick={this.save}>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkboxes