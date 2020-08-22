import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { getHello } from '../../api'



const HelloForm = (props) => {

    let currentActivity = null;

    const { register, handleSubmit, errors } = useForm();

    const onSuccess = (data) => {

        console.log(data)

        if(data.hasOwnProperty('error')) {
            props.setSearchResult('Not fount activity, simplify your search filter');
        } else {
            props.setSearchResult('Successful creation activity');

            props.setActivity(currentActivity);
        }
            
    }

    const onFailure = () => {

        props.setSearchResult('Error creating activity');
    }

    const onClick = data => {

        currentActivity = data;

        getHello(onSuccess, onFailure);
    }

    return(
        <form onSubmit={handleSubmit(onClick)}>
            <div className="form-group row">
                <label>Activity</label>
                <input className="form-control" name="activity" ref={
                    register({
                        validate: value => value.length > 0
                    })
                }/>
            </div>

            <div className="form-group row">
                <button type="submit" className="btn btn-primary">Create</button>
            </div>
            
        </form>
    )

}

export {HelloForm};