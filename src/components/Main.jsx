import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, Sort } from '.'
import {fetchPizzas, setIsLoadedAC} from '../redux/actions/pizzas';
import {setCategoryIndexAC, setIndexSortByAC} from '../redux/actions/filters';
import {LoaderItem, PizzaItem} from './PizzaItem/';
import { setAddPizzaAC } from '../redux/actions/cart';


const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'rating', order: 'desc'},
    {name: 'по цене', type: 'price', order: 'asc'}, 
    {name: 'по алфавиту', type: 'title', order: 'asc'}
];

const Main = () => {
    
    const dispatch = useDispatch();
    //Выгребаются каждое свойство отдельно
    // const pizzas = useSelector( ({pizzas}) => pizzas.items );
    // const isLoaded = useSelector( ({pizzas}) => pizzas.isLoaded );

    //Одним вызовом забераем несколько свойств из редюсера
    const {pizzas, isLoaded} = useSelector( ({pizzas}) => ({
        pizzas: pizzas.items,
        isLoaded: pizzas.isLoaded
    }));

    const pizzasInCart = useSelector( ({cart}) => cart.items );

    //Альтернативная запись - Передаем диструктрурированный объект filters и его возвращаем, после
    //чего диструктуризацией забираем нужные свойства из этого объекта
    const { categoryIndex, indexSortBy } = useSelector( ({filters}) => filters) 

    const objectSortBy = sortItems[indexSortBy];

    React.useEffect(() => {
        dispatch( setIsLoadedAC(false) );
        dispatch(fetchPizzas(categoryIndex, objectSortBy));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryIndex, indexSortBy, objectSortBy]);

    const handleSelectCategoty = idx => {
        dispatch( setCategoryIndexAC(idx) );
    }

    const handleIndexSortBy = idx => {
        dispatch( setIndexSortByAC(idx) );
    }

    const handleAddPizza = pizzaObj => {
        dispatch(setAddPizzaAC(pizzaObj));
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
                        ? pizzas.map( objPizza => (<PizzaItem key={ objPizza.id } 
                                                onAddPizza={handleAddPizza} 
                                                pizzaCount={pizzasInCart[objPizza.id] && pizzasInCart[objPizza.id].length} 
                                                {...objPizza}/>) )
                        : Array(12).fill(0).map( ( _, idx) => ( <LoaderItem key={idx} /> ) )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Main;
