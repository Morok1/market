import React, { cloneElement, useState } from 'react';
import { LotEnum, RoleEnum } from '../enum'
import { LotService } from '../services/LotService'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { LotTypeTable } from './LotTypeTable'
import { DiagramElement } from './DiagramElement'
import { PackageTypeTable } from './PackageTypeTable'
import { CreatePackageForm } from './CreatePackageForm'


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



const LotGrid = (props) => {

    const { lots } = props;

    console.log(lots);

    //const [lots, setState] = useState({lots: []});

    const classes = useStyles();

    const componentDidMount = () => {
        LotService.getLotList(onSuccess, onFailure);
    }

    const onSuccess = (data) => {

        if(data.hasOwnProperty('error')) {
            console.log('Ошибка добавления лота');
        } else {
            console.log('Успешно добавили лот');
            //setState({lots: data});
        }
    }
    
    const onFailure = () => {

        console.log('Ошибка добавления лота');
    }

    return (

        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    <Paper className={classes.paper}>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3}>
                                <Paper className={classes.paper} style={diagramComponentStyle}>
                                    <DiagramElement type={LotEnum.INTERNET} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Paper className={classes.paper} style={diagramComponentStyle}>
                                    <DiagramElement type={LotEnum.SMS} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Paper className={classes.paper} style={diagramComponentStyle}>
                                    <DiagramElement type={LotEnum.MINUTES} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Paper className={classes.paper}>
                                    <CreatePackageForm />
                                </Paper>
                            </Grid>
                            
                        </Grid>

                    </Paper>
                </Grid>

            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <LotTypeTable type={LotEnum.INTERNET} data={lots.filter(lot => lot.type == "INTERNET")} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <LotTypeTable type={LotEnum.SMS} data={lots.filter(lot => lot.type == "SMS")} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <LotTypeTable type={LotEnum.MINUTES} data={lots.filter(lot => lot.type == "MINUTES")} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <PackageTypeTable />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

export {LotGrid}