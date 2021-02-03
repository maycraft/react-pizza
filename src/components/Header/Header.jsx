import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';
import logo from '../../assets/img/pizza-logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="pizza-logo" width="38px" />
                        <div className="logo__info">
                            <p className="logo__title">REACT PIZZA</p>
                            <p className="logo__descr">Самая реактивная пицца</p>
                        </div>
                    </Link>
                </div>
                <div className="header__cart">
                    <Button/>
                </div>
            </div>
        </header>
    )
}

export default Header;
