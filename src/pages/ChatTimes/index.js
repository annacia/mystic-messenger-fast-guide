import React from 'react';
import SearchTimes from '../../components/SearchTimes'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../Home/style.css'

const ChatTimes = () => {

    return(
        <div id="container-body">
            <div id="container">
                <Header showText={false}/>
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

export default ChatTimes;