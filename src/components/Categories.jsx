import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Categories =  React.memo( ({items, onSelectItem}) => {

    const [active, setActive] = useState(null);

    const onSelectCategory = idx => {
        setActive(idx);
        onSelectItem(idx);
    }
    return (
        <ul className="categories">
            <li onClick={ () => {onSelectCategory(null)} }
                className={active === null ? "active" : ""}>Все</li>
            { items.map( (category, idx) => (
                <li onClick={ () => {onSelectCategory(idx)} } 
                    className={active === idx ? "active" : ""} 
                    key={idx}>{category}</li>
                )
            )}
        </ul>
    )
});

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired),
    onSelectItem: PropTypes.func.isRequired
}

export default Categories;
