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
                        <p>For now, I can only help you to find the correct answers for emails and the chat times...</p>
                        <Link to={`/`}>Home</Link>
                        <Link to={`/emails`}>Search For Emails</Link>
                        <Link to={`/chat-times`}>Search For Chat Times</Link>
                        <img src={image} alt="Not Found..."/>
                    </header>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default NotFound;