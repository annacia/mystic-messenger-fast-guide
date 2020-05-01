import React from 'react';
import SearchEmail from '../../components/SearchEmail'

const Home = () => {

    return(
        <>
            <section>
                <header>
                    <h1>Mystic Messenger Fast Email Guide</h1>
                    <p>Find quickly the right answers for all the emails of the game Mystic Messenger!</p>
                </header>
            </section>

            <section>
                <header>
                    <h2>Email Fast Guide</h2>
                    <p>Find quickly the right answers for emails!</p>
                    <SearchEmail/>
                </header>
            </section>
        </>
    )
};

export default Home;