import React from 'react';
import SearchEmail from '../../components/SearchEmail'
import logo from '../../img/logo.png'
import footer from '../../img/footer.png'
import './style.css'

const Home = () => {

    return(
        <div id="container-body">
            <div id="container">
                <img className="logo" src={logo} alt="Mystic Messenger Fast Email Guide" />
                <section>
                    <header>
                        <h1>Mystic Messenger Fast Email Guide</h1>
                        <p>Find quickly the right answers for all the emails of the game Mystic Messenger!</p>
                    </header>
                </section>

                <section id="search">
                    <header>
                        <h2>Email Fast Guide</h2>
                        <p>Find quickly the right answers for emails!</p>
                        <SearchEmail/>
                    </header>
                </section>
            </div>
            <footer >
                <div className="footer-info">
                    <p>made by @annacia</p>
                    <p>Troubles? Send your issue on <a href="https://github.com/annacia/mystic-messenger-fast-guide">GitHub</a></p>
                </div>
                <div className="footer-img" style={{
                backgroundImage: `url(${footer})`
                }}>
                </div>
            </footer>

        </div>
    )
};

export default Home;