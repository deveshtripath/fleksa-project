import React from 'react'
import {Link } from "react-router-dom"
import './Header.css';



function Header() {



    return (
        <nav className="header">
        <Link to="/home">
            <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdT_x9TNbWkeCh44W1EpEjf6estGmPRUgXg&usqp=CAU"
            alt=" "/>
        </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            </div> 

            <div className="header__nav">

                <Link to="/" className="header__link">
                <div onClick="login" className="header__option">
                    <span className="header__optionLineOne">Hello devesh</span>
                    <span className="header__optionLineTwo">"Sign in / Signout"</span>
                    </div>
                </Link>
                {/* 2 */}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& order</span>
                    </div>
                </Link>
                {/* 3 */}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">All Things</span>
                    </div>
                </Link>
                <Link to="/">
                    <div className="header__optionBasket">
                        <span className="header__optionLineTwo header__basketCount" > ALL(10) </span>
                    </div>
                </Link>




            </div>



        </nav>
        
    )
}

export default Header
