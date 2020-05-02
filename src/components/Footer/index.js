import React from 'react';
import footer from '../../img/footer.png'
import './style.css'

const Footer = () => {

    return(
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
    )
};

export default Footer;