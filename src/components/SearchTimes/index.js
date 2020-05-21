import React, { useState, useEffect } from 'react';
import {CHAT_TIMES} from '../../mocks/chat_times';
import Select from 'react-select';

import './style.css';

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

    const [ result, setResult ] = useState([])
    
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

    const getDays = (route, value) => {
        if (route !== undefined) {
            return CHAT_TIMES[route]["routes"][value]["days"]
        }

        if (routeSelected !== "" && routeSelected !== 0) {
            return CHAT_TIMES[value]["routes"][routeSelected.value]["days"]
        }
        
        console.log(CHAT_TIMES[value]["days"])
        return CHAT_TIMES[value]["days"]
    }

    const buildDays = () => {
        let daysArray = [];
        let value = modeSelected.value
        let route = modeSelected.route
        
        let days = getDays(route, value)

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

    const buildResult = () => {
        let value = modeSelected.value
        let route = modeSelected.route

        if (route !== undefined) {
            setResult(CHAT_TIMES[route]["routes"][value]["days"][daySelected.value])
            return;
        }

        if (routeSelected !== "" && routeSelected !== 0) {
            setResult(CHAT_TIMES[value]["routes"][routeSelected.value]["days"][daySelected.value])
            return;
        }

        setResult(CHAT_TIMES[value]["days"][daySelected.value])
    }
    
    useEffect(() => {
        if (options.length === 0) {
            buildOptions()
        }

        if (modeSelected !== "" && dayOptions.length === 0) {
            buildDays()
        }

        if (daySelected !== "" && daySelected !== 0) {
            buildResult()

        }
    })

    const handleModeChange = (selectedOption) => {
        setModeSelected(selectedOption);
        setResult([])
        setDaySelected(0)
        setDayOptions([])
        setRouteOptions([])
        setRouteSelected(0)
        buildOptionsRoute(selectedOption)
    }

    const handleRouteChange = (selectedOption) => {
        setResult([])
        setRouteSelected(selectedOption);
        setDaySelected(0)
        setDayOptions([])
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

    const buildResultString = () => {
        let mode = modeSelected.value
        let route = mode
        let day = daySelected.value
        
        let labelMode = modeSelected.label
        let labelDay = daySelected.label
        let labelRoute = ""

        const setClassOddItem = (key) => {
            if ((key % 2) === 0) {
                return "item-even"
            }

            return "item-odd"
        }

        if (modeSelected.route !== undefined) {
            route = modeSelected.route
        }

        if (routeSelected !== "" && routeSelected !== 0) {
            labelRoute = routeSelected.label
        }

        return (
            <div id="chat-times" className="card-result">
                <h3>{labelMode} - {labelDay}</h3>
                <h4>{labelRoute}</h4>
                {
                    result.map((info, key)=> (
                        <div key={mode+"_"+route+"_"+day+info.replace(":", "")} className={setClassOddItem(key)}>
                            {info}
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <>
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
                        className="form-select"
                        options={options}
                        onChange={handleModeChange}
                        value={modeSelected}
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
                        value={daySelected}
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
                        value={routeSelected}
                    />
                    </>
                    }   
                </div>
            </form>
        </div>
        <div id="list-result">
            {result !== undefined &&
            result.length > 0 && 
            <>
                {
                    buildResultString()
                }
            </>
            }
        </div>
        </>
    )
}
  
export default SearchTimes;