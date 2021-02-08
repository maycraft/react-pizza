import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, Sort } from '.'
import {fetchPizzas, setIsLoadedAC} from '../redux/actions/pizzas';
import {setCategoryIndexAC, setSortByAC} from '../redux/actions/filters';
import {LoaderItem, PizzaItem} from './PizzaItem/';


const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'по цене', type: 'price'}, 
    {name: 'по алфавиту', type: 'alphabet'}
];

const Main = () => {
    
    const dispatch = useDispatch();
    const pizzas = useSelector( ({pizzas}) => pizzas.items );
    const isLoaded = useSelector( ({pizzas}) => pizzas.isLoaded );
    const categoryIndex = useSelector( ({filters}) => filters.categoryIndex );
    const sortBy = useSelector( ({filters}) => filters.sortBy );

    React.useEffect(() => {
        dispatch( setIsLoadedAC(false) );
        dispatch(fetchPizzas(categoryIndex));
    }, [dispatch, categoryIndex]);

    const handleSelectCategoty = idx => {
        dispatch( setCategoryIndexAC(idx) );
    }

    const handleSortBy = name => {
        dispatch( setSortByAC(name) );
    }

    return (
        <div className="content">
            <div className="container">
                <nav className="nav">
                    <Categories items={categories} categoryIndex={categoryIndex}  onSelectCategory={handleSelectCategoty} />
                    <Sort items={ sortItems } sortBy={sortBy} onSortBy={handleSortBy}/>
                </nav>
            </div>
            <div className="pizzas">
                <h1>Все пиццы</h1>
                <div className="pizza__items">
                    {
                        isLoaded
                        ? pizzas.map( item => (<PizzaItem key={ item.id } {...item}/>) )
                        : Array(12).fill(0).map( ( _, idx) => ( <LoaderItem key={idx}/> ) )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Main;
