import React, {useState, Component} from 'react'

import {LotService} from '../services/LotService'
import Fetch from "react-fetch-component";
import { AddLotForm2 } from '../components/AddLotForm2';
//import BootstrapTable from 'react-bootstrap-table-next';


const LotPage = (props) => {

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
            <Fetch url="http://127.0.0.1:8080/all-lots">
                {({ loading, data, error }) => (
                    <div>
                        {loading && <span>Loading...</span>}
                        <table>
                            <tbody>
                            {data && data.map((lot, i) => 
                            
                                <tr key={i}>
                                    <td>{lot.id}</td>
                                    <td>{lot.sellerId}</td>
                                    <td>{lot.type}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                )}
            </Fetch>

            <AddLotForm2 />
        </div>
  
    )
}

export {LotPage};