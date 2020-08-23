import React, { useState, Component } from 'react'

import { LotGrid } from '../components/LotGrid'
import { LotService } from '../services/LotService'
import { LotTypeTable } from '../components/LotTypeTable'
import { LotEnum } from '../enum';

class PackagePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lots: [] }
    }

    componentDidMount() {
        LotService.getLotList((data) => { this.setState({lots: data})}, this.onFailure);
    }

    onSuccess(data) {

        if(data.hasOwnProperty('error')) {
            //props.setSearchResult('Not fount activity, simplify your search filter');
            console.log('Not fount activity, simplify your search filter');
        } else {
            this.setState({lots: data});
        }
    }
    
    onFailure() {

        console.log('Error creating activity');
    }


    render() {

        return (
            <div className="container">
                <div className="row">
                    <LotGrid lots={ this.state.lots }/>
                </div>
            </div>
        ); 
    }
}

export { PackagePage };