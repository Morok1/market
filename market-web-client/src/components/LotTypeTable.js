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

const LotTypeTable = (props) => {

    let lotName = "Интернет";
    let lotUnits = "Гб";
    let list = props.data;

    switch(props.type) {

        case LotEnum.INTERNET: {
            lotName = "Интернет";
            lotUnits = "гбайт";
            break;
        }

        case LotEnum.SMS: {
            lotName = "Смс";
            lotUnits = "смс";
            break;
        }

        case LotEnum.MINUTES: {
            lotName = "Минуты";
            lotUnits = "минут";
            break;
        }
    }
    
    const handleChange = (event) => {

        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value    
        });
    }
    

    const onSuccess =(data) => {

        if(data.hasOwnProperty('error')) {
            console.log('Ошибка добавления лота');
        } else {
            console.log('Успешно добавили лот')
        }
    }

    const onFailure = () => {

        console.log('Ошибка добавления лота');
    }

    const handleSubmit = (event) =>  {
        event.preventDefault() // Без этого страница перезагрузится
        //LotService.addLot(lotName, onSuccess, onFailure);
        console.log(lotName);
    };

    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <div> {lotName} </div>
                {
                    list.map(item => (
                        <div key={item}>{item.id}</div>
                    ))
                }
        </Grid>
    );
}

export {LotTypeTable}