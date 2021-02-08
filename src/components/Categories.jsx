import React from 'react';
import PropTypes from 'prop-types'

const Categories =  React.memo( ({items, categoryIndex, onSelectCategory}) => {

    return (
        <ul className="categories">
            <li onClick={ () => {onSelectCategory(null)} }
                className={categoryIndex === null ? "active" : ""}>Все</li>
            { items.map( (category, idx) => (
                <li onClick={ () => {onSelectCategory(idx)} } 
                    className={categoryIndex === idx ? "active" : ""} 
                    key={idx}>{category}</li>
                )
            )}
        </ul>
    )
});

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired),
    categoryIndex: PropTypes.number,
    onSelectCategory: PropTypes.func.isRequired
}

export default Categories;
