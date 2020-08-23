import React, {useState, useEffect, Component} from 'react'
import Datepicker from "../components/Datepicker";
import Checkboxes from "../components/checkbox/Checkboxes";

const SettingPage = () => {
    return(
        <div className="container">
            <Datepicker/>
            <Checkboxes/>
        </div>
      )
};

export {SettingPage};