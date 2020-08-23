import React, { cloneElement } from 'react';

import {LotService} from '../services/LotService'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const selectStyle = {
    fontFamily: 'tele2_textsans_regular, sans-serif',
    fontSize: 16
}

class AddLotForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            type: 0,    // TODO: enum
            sellerId: "88005553535",
            buyerId: "buyer-1",
            count: 0
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
        //event.preventDefault() // Без этого страница перезагрузится
        
        let lot = {
            id: this.state.id,
            type: this.state.type,
            sellerId: this.state.sellerId,
            buyerId: this.state.buyerId,
            product: {
                gigabytes: this.state.count,
                smss: 0,
                minutes: 0
            }
        }

        LotService.addLot(lot, this.onSuccess, this.onFailure);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <hr/>

                <h3>Сформировать лот</h3>

                <p>Введите количество единиц выставляемой услуги:</p>
                <div class="text-field-holder">
                    <label for="someField"></label>
                    <input type="number" class="text-field" id="someField" name="count" onChange={this.handleChange}/>
                </div>

                <br/>

                <p>Выберете тип услуги:</p>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="type"
                    style={{minWidth: 100 + '%', fontFamily: 'tele2_textsans_regular, sans-serif', fontSize: 16}}
                    value={0}
                    onChange={this.handleChange}
                    >
                    <MenuItem style={selectStyle} value={0}>Интернет</MenuItem>
                    <MenuItem style={selectStyle} value={1}>СМС</MenuItem>
                    <MenuItem style={selectStyle} value={2}>Минуты</MenuItem>
                </Select>
                <br/>
                <br/>

                <div>
                    <input className="btn btn-primary btn--medium" type="submit" value="Выставить" />
                </div>

            </form>
        );
    }
}

export {AddLotForm2}