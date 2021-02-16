import React from 'react'
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button } from '..';

const PizzaItem = React.memo(({id, imageUrl, title, price, sizes, types, onAddPizza, pizzaCount}) => {

    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];

    const idxSize = availableSizes.indexOf(sizes[0]);

    const [activeIndexType, setActiveIndexType] = React.useState(types[0]);
    const [activeIndexSize, setActiveIndexSize] = React.useState(idxSize);

    const onSelectItem = idx => {
        setActiveIndexSize(idx);
    }

    const onSelectType = idx => {
        setActiveIndexType(idx);
    }

    const handleAddPizzaToCart = () => {
        const pizza = {
            id,
            title,
            imageUrl,
            price,
            activeType: availableTypes[activeIndexType],
            activeSize: availableSizes[activeIndexSize]
        }
        onAddPizza(pizza);
    }

    return (
        <div className="item">
            <img src={imageUrl} alt={title} className="flexible-image" />
            <p className="item__name">{title}</p>
            <div className="item__properties">
                <div className="item__types">
                    {/* <div className="item__type active">тонкое</div>
                    <div className="item__type">традиционное</div> */}
                    {
                        availableTypes.map( (type, idx) => (
                            <div 
                                key={idx}
                                className={cn('item__type', {
                                    'active': idx === activeIndexType,
                                    'disabled': !types.includes(idx)
                                })}
                                onClick={() => onSelectType(idx)}    
                            >{type}</div> 
                        ))
                    }
                </div>
                <div className="item__sizes">
                    {
                        availableSizes.map( (size, idx) => ( 
                            <div key={idx} 
                                className={ cn('item__size', 
                                    {
                                        'active': activeIndexSize === idx,
                                        'disabled': !sizes.includes(size)
                                    })}
                                onClick={() => onSelectItem(idx)}>{size} см</div> 
                        ))
                    }
                </div>
            </div>
            <div className="item__order">
                <div className="item__price">от {price} ₽</div>
                <Button className="button--add"
                        onClick={handleAddPizzaToCart}
                        outline>
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                    </svg>
                    <span> Добавить</span>
                    { pizzaCount && <span className="amount">{pizzaCount}</span> }
                </Button>
            </div>
        </div>
    )
}

);

PizzaItem.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number),
    types: PropTypes.arrayOf(PropTypes.number),
    onAddPizza: PropTypes.func.isRequired,
    pizzaCount: PropTypes.number
}


export default PizzaItem;
