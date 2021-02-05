import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzaItem, Sort } from '.'
import { setPizzas } from '../redux/actions/setPizzas';

const Main = () => {
    
    const dispatch = useDispatch();
    const pizzas = useSelector( ({pizzas}) => pizzas.items );

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas')
            .then( response => {
                dispatch( setPizzas(response.data) );
            })
    }, [dispatch]);

    return (
        <div className="content">
            <div className="container">
                <nav className="nav">
                    <Categories />
                    <Sort items={ ['популярности', 'по цене', 'по алфавиту'] }/>
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
