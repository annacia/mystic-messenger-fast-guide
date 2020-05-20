import React from 'react';
import SearchEmail from '../../components/SearchEmail'
import SearchTimes from '../../components/SearchTimes'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css'

const Home = () => {

    return(
        <div id="container-body">
            <div id="container">
                <Header/>

                <section id="search">
                    <header>
                        <h2>Email Guide</h2>
                        <p>Find quickly the right answers for emails!</p>
                    </header>
                    <SearchEmail/>
                </section>
                <section id="search">
                    <header>
                        <h2>Chat Times</h2>
                        <p>Find quickly the chat times!</p>
                    </header>
                    <SearchTimes/>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default Home;