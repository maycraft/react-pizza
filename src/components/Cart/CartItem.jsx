import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const CartItem = ({id, title, imageUrl, activeSize, activeType, totalCount, 
                totalPrice, onDeletePizza, onEncreasePizza, onDecreasePizza}) => {

    return (
        <div className="cart__item">
            <div className="cart__product">
                <img src={imageUrl} alt={title} />
                <div className="cart__product--info">
                    <p className="cart__product--name">{title}</p>
                    <p className="cart__product--properties">{activeType} тесто, {activeSize} см.</p>
                </div>
            </div>
            <div className="cart__count">
                <Button className="button--circle button--decrease" onClick={() => onDecreasePizza(id)}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                    </svg>
                </Button>
                <span className="cart__count--num">{totalCount}</span>
                <Button className="button--circle button--increase" onClick={() => onEncreasePizza(id)}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                    </svg>
                </Button>
            </div>
            <span className="cart__price">{totalPrice} ₽</span>
            <div className="cart__delete">
                <Button className="button--circle button--delete" onClick={() => onDeletePizza(id)}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#D7D7D7"/>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#D7D7D7"/>
                    </svg>
                </Button>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    activeSize: PropTypes.number.isRequired,
    activeType: PropTypes.string.isRequired,
    totalCount: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    onDeletePizza: PropTypes.func.isRequired
}

export default CartItem;
