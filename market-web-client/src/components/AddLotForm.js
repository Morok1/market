import React, {useState, setState} from 'react'
import { useForm } from "react-hook-form";

import {LotService} from '../services/LotService'

const AddLotForm = (props) => {

    let lot = {
        id: 0,
        type: 0,    // TODO: enum
        sellerId: "seller-1",
        buyerId: "buyer-1",
    };

    const onSuccess = (data) => {

        if(data.hasOwnProperty('error')) {
            console.log('Ошибка добавления лота');
        } else {
            console.log('Успешно добавили лот')
        }
    }
    
    const onFailure = () => {

        console.log('Ошибка добавления лота');
    }

    

    const handleChange = (event) => {    
        //setState({value: event.target.value}); 
     };

     const handleSubmit = (event) => {
        alert('Сочинение отправлено: ' + lot.type);
        
        
        LotService.addLot(lot, onSuccess, onFailure);
    }

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);

    /*
    private Long id;
    private String sellerId;
    private String buyerId;
    private Type type;

    */
    return(
      <form onSubmit={handleSubmit}>
        <label>
          Тип лота:
          <input className="form-control" type="text" ref={(value) => lot.type = value} /> 
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );

}

export {AddLotForm};