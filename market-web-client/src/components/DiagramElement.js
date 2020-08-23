import React, { cloneElement } from 'react';
import {LotEnum, RoleEnum} from '../enum'
import {LotService} from '../services/LotService'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { LotTypeTable } from './LotTypeTable'
import { PieChart } from 'react-minimal-pie-chart';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#1F2229',
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const diagramComponentStyle = {
    backgroundColor: '#1F2229',
}

const textComponentStyle = {
    color: '#FFFFFF',
}

const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
};

const DiagramElement = (props) => {

    let lotName = "Интернет";
    let lotUnits = "Гб";

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

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <h3 style={{
                    fontSize: '20px',
                    fontFamily: 'sans-serif',
                    color: '#FFFFFF',
                }}>{lotName}
            </h3>

            <div style={{
                    fontSize: '15px',
                    fontFamily: 'sans-serif',
                    color: '#FFFFFF',
                }}>Остаток: 53 {lotUnits}
            </div>

            <PieChart 
                style={{ height: '260px' }}
                label={({ dataEntry }) => 53}
                labelStyle={{
                    fontSize: '20px',
                    fontFamily: 'sans-serif',
                    fill: '#FFFFFF',
                }}
                radius={30}
                lineWidth={35}
                data={[
                    { title: 'One', value: 53, color: '#3FCBFF' },
                    { title: 'Two', value: 47, color: '#FF59A3' },
                ]}
                labelPosition={0}
            />

            <h4 style={{
                    fontSize: '16px',
                    fontFamily: 'sans-serif',
                    color: '#FFFFFF',
                }}>Использованно: 
            </h4>

            <div style={{
                    fontSize: '15px',
                    fontFamily: 'sans-serif',
                    color: '#FFFFFF',
                }}>75 {lotUnits}
            </div>

            <div style={{
                    fontSize: '13px',
                    fontFamily: 'sans-serif',
                    color: '#FFFFFF',
                }}>за
            </div>

            <div style={{
                    fontSize: '15px',
                    fontFamily: 'sans-serif',
                    color: '#FFFFFF',
                }}>22 дня
            </div>

        </div>
    );
}

export { DiagramElement }