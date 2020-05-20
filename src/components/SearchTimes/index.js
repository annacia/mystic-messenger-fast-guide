import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import notFound from '../../img/notfound.gif'
import {CHAT_TIMES} from '../../mocks/chat_times';
import Select from 'react-select';

import './style.css';

const initialValues = {
    text: ""
};

const addToArray = (
    obj, 
    newArray, 
    useLabelKey = false, 
    route = ""
    ) => {
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        let mode = obj[keys[i]];
        let name = mode.name;
        
        if (useLabelKey) {
            name = keys[i].charAt(0).toUpperCase() + keys[i].slice(1) + "'s Route"
        }
        
        let value = {
            value: keys[i],
            label: name
        }

        if (route !== "") {
            value.route = route
        }

        newArray.push(value)
    }

    return newArray
}

const SearchTimes = () => {
    const [ modeSelected, setModeSelected  ] = useState("")
    const [ daySelected, setDaySelected ] = useState("")
    const [ routeSelected, setRouteSelected ] = useState("")
    
    const [ options, setOptions ] = useState([])
    const [ dayOptions, setDayOptions ] = useState([])
    const [ routeOptions, setRouteOptions ] = useState([])
    
    const buildOptions = () => {
        
        let keys = Object.keys(CHAT_TIMES)
        let optionsArray = [];
        optionsArray = addToArray(CHAT_TIMES, optionsArray)
        for (let i = 0; i < keys.length; i++) {
            let mode = CHAT_TIMES[keys[i]];
            if (mode.routes !== undefined) {
                optionsArray = addToArray(
                    mode.routes, 
                    optionsArray, 
                    true, 
                    keys[i]
                )
            }
        }

        setOptions(optionsArray)
    }

    const buildDays = () => {
        let daysArray = [];
        let days = {}
        let value = modeSelected.value
        let route = modeSelected.route
        if (route !== undefined) {
            days = CHAT_TIMES[route]["routes"][value]["days"]
        } else {
            days = CHAT_TIMES[value]["days"]
        }

        let keys = Object.keys(days)

        for (let i=0; i < keys.length; i++) {
            let value = {
                value: keys[i],
                label: "Day " + keys[i].charAt(0).toUpperCase() + keys[i].slice(1)
            }

            daysArray.push(value)
        }

        setDayOptions(daysArray)

    } 

    
    const formik = useFormik({
        initialValues
    });
    
    useEffect(() => {
        if (options.length === 0) {
            buildOptions()
        }

        if (modeSelected !== "" && dayOptions.length === 0) {
            buildDays()
        }

        if (modeSelected !== "" && daySelected !== "") {
            console.log(CHAT_TIMES[modeSelected.value]["days"][daySelected.value])
        }
    })

    const handleModeChange = (selectedOption) => {
        setModeSelected(selectedOption);
        setDayOptions([])
        buildOptionsRoute(selectedOption)
    }

    const handleRouteChange = (selectedOption) => {
        setRouteSelected(selectedOption);
        setDayOptions([])
        buildDays()
    }

    const buildOptionsRoute = (selectedOption) => {
        let routes;
        if (selectedOption.route === undefined) {
            routes = CHAT_TIMES[selectedOption.value]["routes"]
        }

        if (routes === undefined) {
            setRouteOptions([])
            return;
        }

        let keys = Object.keys(routes)
        let optionsRouteArray = []

        optionsRouteArray.push(
            {
                value: 0,
                label: "Common Route"
            }
        )

        for(let i=0; i < keys.length; i++) {
            let value = {
                value: keys[i],
                label: keys[i].charAt(0).toUpperCase() + keys[i].slice(1) + "'s Route"
            }

            optionsRouteArray.push(value)
        }

        setRouteOptions(optionsRouteArray)
        setRouteSelected(0)
    }

    return (
        <div id="form-search">
            <form id="form-content" 
            onSubmit={e => {
                e.preventDefault()
            }}> 
                <div className="form-group group-items">
                    <div className="item">
                    {options.length > 0 &&
                    <>
                    <label>Game Mode</label>
                    <Select
                        options={options}
                        onChange={handleModeChange}
                    />
                    </>
                    }
                    </div>
                    <div className="item">
                    {dayOptions.length > 0 &&
                    <>
                    <label>Choose the day</label>
                    <Select
                        options={dayOptions}
                        onChange={setDaySelected}
                    />
                    </>
                    }
                    </div>

                </div>
                <div className="form-group">
                    {routeOptions.length > 0 &&
                    <>
                    <label>Choose the route</label>
                    <Select
                        options={routeOptions}
                        onChange={handleRouteChange}
                    />
                    </>
                    }   
                </div>
            </form>
        </div>
    )
}
  
export default SearchTimes;