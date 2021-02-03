import './App.css';
import {Header, Main, Cart} from './components/';
import {Route} from 'react-router-dom';

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Route exact path="/" component={Main}/>
            <Route path="/cart" component={Cart} />
        </div>
    );
}

export default App;
