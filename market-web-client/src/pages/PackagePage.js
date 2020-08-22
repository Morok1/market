import React, { useState, useEffect, Component } from 'react'

import { LotGrid } from '../components/LotGrid'
import { LotService } from '../services/LotService'
import { LotTypeTable } from '../components/LotTypeTable'
import { LotEnum } from '../enum';


const PackagePage = (props) => {

    const onSuccess = (data) => {

        if(data.hasOwnProperty('error')) {
            //props.setSearchResult('Not fount activity, simplify your search filter');
            console.log('Not fount activity, simplify your search filter');
        } else {
            lotList = data.map((lot) => <li>{lot.id}</li>);
        }
    }
    
    const onFailure = () => {

        console.log('Error creating activity');
    }

    let lotListElement = null;

    let lotList = LotService.getLotList(onSuccess, onFailure);

    const columns = [{
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];

    return(
        <div className="container">
            <div className="row">
                <LotGrid/>
            </div>
        </div>
    )
}

export {PackagePage};