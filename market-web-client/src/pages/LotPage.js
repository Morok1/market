import React, {useState, Component} from 'react'

import {LotService} from '../services/LotService'
import Fetch from "react-fetch-component";
import { AddLotForm2 } from '../components/AddLotForm2';
import { Typography } from '@material-ui/core';
//import BootstrapTable from 'react-bootstrap-table-next';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const listStyle = {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#000000DE'
}

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
             <h3>Доступные лоты</h3>

             <List component="nav" className={listStyle} aria-label="mailbox folders">
                <Fetch url="http://127.0.0.1:8080/all-lots">
                    {({ loading, data, error }) => (
                        <div>
                            {loading && <span>Loading...</span>}
                            <table>
                                <tbody>
                                {data && data.map((lot, i) => 
                                    <ListItem button>
                                        <ListItemText primary={<Typography variant="h6" style={{ color: '#000000' }}>Номер лота: {lot.id} | Абонент: {lot.sellerId} | {lot.product.gigabytes} {lot.type}</Typography>}/>
                                    </ListItem>
                                )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </Fetch>
            </List>

            <AddLotForm2 />
        </div>
  
    )
}

export {LotPage};