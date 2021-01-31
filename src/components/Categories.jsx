import React, { useState } from 'react'

const Categories =  React.memo( () => {

    
    const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const [active, setActive] = useState(null);

    const onSelectCategory = idx => {
        setActive(idx);
    }
    return (
        <ul className="categories">
            <li onClick={ () => {onSelectCategory(null)} }
                className={active === null ? "active" : ""}>Все</li>
            { categories.map( (category, idx) => (
                <li onClick={ () => {onSelectCategory(idx)} } 
                    className={active === idx ? "active" : ""} 
                    key={idx}>{category}</li>
                )
            )}
        </ul>
    )
});

export default Categories;
