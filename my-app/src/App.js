import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Products from '../src/Products/Products';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';

function App() {
  return (
    
    <div className="page__container">
      
      <div className="content__wrap">
      <BrowserRouter>
      
      <Switch>
        <Route path="/" exact>
        <Header/>
        <Products/>
        
        </Route>
        <Route path="/cart">
        <Header/>
        <Cart/>
        
        </Route>
      </Switch>
      </BrowserRouter>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
