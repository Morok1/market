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

const LotGrid = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    <Paper className={classes.paper}>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4} style={diagramComponentStyle}>
                                <Paper className={classes.paper} style={diagramComponentStyle}>
                                    <label style={textComponentStyle}>График</label>
                                    <PieChart
                                        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                                        labelStyle={defaultLabelStyle}
                                        radius={35}
                                        data={[
                                            { title: 'One', value: 53, color: '#3FCBFF' },
                                            { title: 'Two', value: 47, color: '#FF59A3' },
                                        ]}
                                    />;
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Paper className={classes.paper}>
                                    График
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Paper className={classes.paper}>
                                    График
                                </Paper>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <LotTypeTable type={LotEnum.INTERNET} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <LotTypeTable type={LotEnum.SMS} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <LotTypeTable type={LotEnum.MINUTES} />
                    </Paper>
                </Grid>
            </Grid>
    </div>
    );
}

export {LotGrid}