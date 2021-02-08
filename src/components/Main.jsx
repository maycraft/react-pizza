import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, Sort } from '.'
import {fetchPizzas, setIsLoadedAC} from '../redux/actions/pizzas';
import {setCategoryIndexAC, setIndexSortByAC} from '../redux/actions/filters';
import {LoaderItem, PizzaItem} from './PizzaItem/';


const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'rating', order: 'desc'},
    {name: 'по цене', type: 'price', order: 'asc'}, 
    {name: 'по алфавиту', type: 'title', order: 'asc'}
];

const Main = () => {
    
    const dispatch = useDispatch();
    const pizzas = useSelector( ({pizzas}) => pizzas.items );
    const isLoaded = useSelector( ({pizzas}) => pizzas.isLoaded );
    const categoryIndex = useSelector( ({filters}) => filters.categoryIndex );
    const indexSortBy = useSelector( ({filters}) => filters.indexSortBy );

    const objectSortBy = sortItems[indexSortBy];

    React.useEffect(() => {
        dispatch( setIsLoadedAC(false) );
        dispatch(fetchPizzas(categoryIndex, objectSortBy));
    }, [dispatch, categoryIndex, indexSortBy, objectSortBy]);

    const handleSelectCategoty = idx => {
        dispatch( setCategoryIndexAC(idx) );
    }

    const handleIndexSortBy = idx => {
        dispatch( setIndexSortByAC(idx) );
    }

    return (
        <div className="content">
            <div className="container">
                <nav className="nav">
                    <Categories items={categories} categoryIndex={categoryIndex}  onSelectCategory={handleSelectCategoty} />
                    <Sort items={ sortItems } indexSortBy={indexSortBy} onIndexSortBy={handleIndexSortBy}/>
                </nav>
            </div>
            <div className="pizzas">
                <h1>Все пиццы</h1>
                <div className="pizza__items">
                    {
                        isLoaded
                        ? pizzas.map( item => (<PizzaItem key={ item.id } {...item}/>) )
                        : Array(12).fill(0).map( ( _, idx) => ( <LoaderItem key={idx} /> ) )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Main;
