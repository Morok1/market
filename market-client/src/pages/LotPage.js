import React, {useState, useEffect, Component} from 'react'

import {LotService} from '../services/LotService'



const LotPage = (props) => {

    const onSuccess = (data) => {

        if(data.hasOwnProperty('error')) {
            //props.setSearchResult('Not fount activity, simplify your search filter');
            console.log('Not fount activity, simplify your search filter');
        } else {
            lotListElement = lotList?.map((lot) => <li>{lot.id}</li>);
        }
    }
    
    const onFailure = () => {

        console.log('Error creating activity');
        //props.setSearchResult('Error creating activity');
    }

    let lotListElement = null;

    let lotList = LotService.getLotList(onSuccess, onFailure);

    return(
        <div>
            Лоты
            {lotListElement}
        </div>
  
    )
}

export {LotPage};