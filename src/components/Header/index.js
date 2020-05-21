import React from 'react';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
import './style.css'

const Header = (props) => {
    const { showText } = props


    return(
        <>
        <Link to={`/`}>
            <img className="logo" src={logo} alt="Mystic Messenger Fast Guide" />
        </Link>
        {showText === true && 
        <section>
            <header>
                <h1>Mystic Messenger Fast Guide</h1>
                <p>Find quickly the right answers for all the emails and the chat times of the game Mystic Messenger!</p>
            </header>
        </section>
        }
        </>
    )
};

export default Header;