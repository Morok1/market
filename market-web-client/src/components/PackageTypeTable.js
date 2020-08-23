import React, { cloneElement } from 'react';
import {LotEnum, RoleEnum} from '../enum'
import {LotService} from '../services/LotService'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        width: 33,
        height: 140,
        
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const PackageTypeTable = (props) => {

    let lotName = "Пакеты";
    let lotUnits = "ед";

    let list = [];
    
    return (
        <Grid item xs={12}>
            <div> {lotName} (в разработке) </div>
            <ul>
                {
                    list.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </Grid>
    );
}

export { PackageTypeTable }