import React from 'react';
import logo from '../../img/logo.png'
import './style.css'

const Header = () => {

    return(
        <>
        <img className="logo" src={logo} alt="Mystic Messenger Fast Email Guide" />
        <section>
            <header>
                <h1>Mystic Messenger Fast Email Guide</h1>
                <p>Find quickly the right answers for all the emails of the game Mystic Messenger!</p>
            </header>
        </section>
        </>
    )
};

export default Header;