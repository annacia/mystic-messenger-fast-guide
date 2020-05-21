import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import image from '../../img/home.jpg'
import './style.css'

const Home = () => {

    return(
        <div id="container-body">
            <div id="container">
                <Header showText={true}/>

                <section id="search" className="home">
                    <header>
                        <nav id="home-nav">
                            <Link to={`/emails`}>Answers for Emails</Link>
                            <Link to={`/chat-times`}>Chat Times (Without Spoiler)</Link>
                        </nav>
                    </header>
                    <img src={image} alt="Home"/>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default Home;