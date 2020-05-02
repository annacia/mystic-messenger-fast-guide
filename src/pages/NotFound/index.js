import React from 'react';
import image from '../../img/notfoundp.gif'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './style.css'

const NotFound = () => {

    return(
        <div id="container-body">
            <div id="container">
                <Header/>
                <section id="notfound">
                    <header>
                        <h2>404 Page Not Found</h2>
                        <p>What are you looking for?</p>
                        <p>For now, I can only help you to find the correct answers for emails...</p>
                        <Link to={`/`}>Search For Emails</Link>
                        <img src={image} alt="Not Found..."/>
                    </header>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default NotFound;