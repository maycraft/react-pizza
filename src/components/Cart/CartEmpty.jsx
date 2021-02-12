import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '..';

import emptyCartImg from '../../assets/img/empty-cart.png';

const CartEmpty = () => {
    return (
        <div className="empty__content">
            <Link to="/">
                <h1>Корзина пустая <span>&#128533;</span></h1>
                <p className="description">Вероятней всего, вы не заказывали ещё пиццу.<br/>
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <div className="empty__image"><img src={emptyCartImg} alt="empty cart" /></div>
                <Button className="button--back">Вернуться назад</Button>
            </Link>
        </div>
    )
}

export default CartEmpty
