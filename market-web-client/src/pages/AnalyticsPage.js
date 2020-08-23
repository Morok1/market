import React, {useState, Component} from 'react'

import {LotService} from '../services/LotService'
import { AddLotForm } from '../components/AddLotForm';
import { AddLotForm2 } from '../components/AddLotForm2';



const AnalyticsPage = (props) => {

    const onSuccess = (data) => {

        if(data.hasOwnProperty('error')) {
            //props.setSearchResult('Not fount activity, simplify your search filter');
            console.log('Not fount activity, simplify your search filter');
        } else {
        }
    }
    
    const onFailure = () => {

        console.log('Error creating activity');
        //props.setSearchResult('Error creating activity');
    }

    let lotListElement = null;

    LotService.getLotList(onSuccess, onFailure);

    return(

        <div className="row">
            
            <h2>Лоты</h2>

            <div className="col-4">
                <h2>Лоты</h2>
                {lotListElement}

                
                <h3>Добавить лот:</h3>
                <AddLotForm2 />
            </div>

        </div>
  
    )
}

export {AnalyticsPage};