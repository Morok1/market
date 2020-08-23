import React, {useState, useEffect, Component} from 'react'
import Datepicker from "../components/Datepicker";
import Checkboxes from "../components/checkbox/Checkboxes";
import { Textbox } from 'react-inputs-validation';
import PostCreate from "../components/input/PostCreate";
import { FieldType } from 'react-metaforms';

const form  = [
    {
        "name": "username",
        "label": "Username",
        "type": "text"
    },
    {
        "name": "submit",
        "type": "submit"
    }
];
const SettingPage = () => {
    return(
        <div className="container">
            <Datepicker/>
            <Checkboxes/>
            <PostCreate/>
        </div>
      )
};

export {SettingPage};