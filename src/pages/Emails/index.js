import React from 'react';
import SearchEmail from '../../components/SearchEmail'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../Home/style.css'

const Emails = () => {

    return(
        <div id="container-body">
            <div id="container">
                <Header showText={false}/>

                <section id="search">
                    <header>
                        <h2>Email Guide</h2>
                        <p>Find quickly the right answers for emails!</p>
                    </header>
                    <SearchEmail/>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default Emails;