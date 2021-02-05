import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzaItem, Sort } from '.'
import { setCategoryAC, setPizzasAC } from '../redux/actions';


const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'по цене', type: 'price'}, 
    {name: 'по алфавиту', type: 'alphabet'}
];

const Main = () => {
    
    const dispatch = useDispatch();
    const pizzas = useSelector( ({pizzas}) => pizzas.items );

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas')
            .then( response => {
                dispatch( setPizzasAC(response.data) );
            })
    }, [dispatch]);

    const handleSelectItem = idx => {
        dispatch( setCategoryAC(idx) );
    }

    return (
        <div className="content">
            <div className="container">
                <nav className="nav">
                    <Categories items={categories} onSelectItem={handleSelectItem} />
                    <Sort items={ sortItems }/>
                </nav>
            </div>
            <div className="pizzas">
                <h1>Все пиццы</h1>
                <div className="pizza__items">
                    {
                        pizzas.map( item => {
                            return <PizzaItem key={ item.id } {...item}/>
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Main;
