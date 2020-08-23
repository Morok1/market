import React, { cloneElement } from 'react';

import {LotService} from '../services/LotService'

class AddLotForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            type: 0,    // TODO: enum
            sellerId: "88005553535",
            buyerId: "buyer-1",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {

        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value    
        });
    }
    

    onSuccess(data){

        if(data.hasOwnProperty('error')) {
            console.log('Ошибка добавления лота');
        } else {
            console.log('Успешно добавили лот')
        }
    }

    onFailure() {

        console.log('Ошибка добавления лота');
    }

    handleSubmit(event) {
        event.preventDefault() // Без этого страница перезагрузится
        LotService.addLot(this.state, this.onSuccess, this.onFailure);
        console.log(this.state);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div className="form-group row">
                    <label>Тип выставленного лота</label>
                </div>
                <div className="form-group row">
                    <select className="form-control" name="type" value={this.state.type} onChange={this.handleChange}>
                        <option value="0">Интернет</option>
                        <option value="1">СМС</option>
                        <option value="2">Минуты</option>
                    </select>
                </div>
                <div className="form-group row">
                    <input type="submit" value="Submit" />
                </div>

            </form>
        );
    }
}

export {AddLotForm2}