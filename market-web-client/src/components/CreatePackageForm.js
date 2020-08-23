import React, {useState, setState} from 'react'
import { useForm } from "react-hook-form";
import { LotEnum } from '../enum';

import {LotService} from '../services/LotService'

const CreatePackageForm = (props) => {

    let lot = {
        id: 0,
        type: LotEnum.PACKAGE,
        sellerId: "88005553535",
        buyerId: "",
        product: null
    }

    const [product, setState] = useState({
        smss: 0,
        gigabytes: 0,
        minutes: 0
    });

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
        //setLot({value: event.target.value}); 
     };

     const handleSubmit = (event) => {

        lot.product = product;
        
        LotService.addLot(lot, onSuccess, onFailure);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Продажа пакета</h2>
            <div>
                <label>Гигабайты:</label><br/>
                <input className="form-control" type="text" name="internet" onChange={(event) => {
                    setState({ gigabytes: event.target.value})
                }} /> 
            </div>
            <br/>
            
            <div>
                <label> Минуты:</label><br/>
                <input className="form-control" type="text" name="minutes" onChange={(event) => {
                    setState({ minutes: event.target.value})
                }} /> 
            </div>
            <br/>
            
            <div>
                <label>СМС:</label><br/>
                <input className="form-control" type="text" name="sms" onChange={(event) => {
                    setState({ smss: event.target.value})
                }} /> 
            </div>
            <br/>
            <br/>
            
            <input className="btn btn-primary btn--medium" type="submit" value="Выставить" />
        </form>
    );
}

export { CreatePackageForm };