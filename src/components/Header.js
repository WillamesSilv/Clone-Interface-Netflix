import React from "react";

import './Header.css'

const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1165907170178695168/JLkRF8ZY_400x400.png" alt="usuario" />
                </a>
            </div>
        </header>

    )
}

export default Header