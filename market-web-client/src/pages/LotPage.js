import React, {useState, useEffect, Component} from 'react'

import {LotService} from '../services/LotService'
import Fetch from "react-fetch-component";
import BootstrapTable from 'react-bootstrap-table-next';




const LotPage = (props) => {

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
        //props.setSearchResult('Error creating activity');
    }


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
        <div>
            <Fetch url="http://127.0.0.1:8080/all-lots">
                {({ loading, data, error }) => (
                    <div>
                        {loading && <span>Loading...</span>}
                        {/*{data && <BootstrapTable keyField='id' data={ data.jsonify } columns={ columns } />}*/}
                        <table>
                        {data && data.map((lot, i) => <div key={i}>
                            <tr>
                                <td>{lot.id}</td>
                                <td>{lot.product}</td>
                                <td>{lot.type}</td>
                            </tr>
                        </div>)}
                        </table>
                    </div>
                )}
            </Fetch>
        </div>
  
    )
}

export {LotPage};