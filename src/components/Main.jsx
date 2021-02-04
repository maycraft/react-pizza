import axios from 'axios'
import React from 'react'
import { Categories, PizzaItem, Sort } from '.'

const Main = () => {
    
    const [ pizzas, setPizzas ] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas')
            .then( response => {
                setPizzas(response.data);
            })
    }, []);

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
