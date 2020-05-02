import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import notFound from '../../img/notfound.gif'
import {EMAIL} from '../../mocks/email';

const initialValues = {
    text: ""
};

const SearchEmail = () => {
    const [ result, setResult ] = useState([])
    const [ text, setText ] = useState("")

    const formik = useFormik({
        initialValues
    });

    const searchKeys = (textInput) => {
        let guestResult = []
        Object.keys(EMAIL).filter(guest => guest.includes(textInput.toLowerCase())).map(
            guestFinded => (
                guestResult.push(EMAIL[guestFinded])
            )
        )
        setResult(guestResult)
    }

    

    const Result = () => {
        if (result.length === 0 && text !== "") {
            return(
                <>
                <img className="notfound-img" src={notFound} alt="Guest not found..."/>
                <span className="notfound-label">Guest: {text} not found...</span>
                </>
            )
        }

        const IsAnother = (props) => {
            const { info } = props

            if (info.another) {
                return (
                    <span className="another-label">Another History</span>
                )
            }

            return (
                <>
                </>
            )
        }

        return (
            <div>
            {result.map(info=> (
                <div className="card-result" key={info.name+"_box"}>
                        <span key={info.name+"_title"} className="title-guest">@{info.name}</span>
                        <IsAnother info={info}/>
                    <ul key={info.name+"_list"}>
                        {info.answers.map((answers, key) => ( <li key={info.name+key}>{answers}</li>))}
                    </ul>
                </div>
            ))}
            </div>
        )
    }

    useEffect(() => {
        setText(formik.values.text)
        if (formik.values.text !== "") {
            searchKeys(formik.values.text)
        } else {
            setResult([])    
        }
    }, [formik.values.text]);

    return (
        <div id="form-search">
            <form id="form-content" 
            onSubmit={e => {
                e.preventDefault()
            }}> 
                <input placeholder="@" {...formik.getFieldProps("text")} />
            </form>
            <Result/>
        </div>
    )
}
  
export default SearchEmail;