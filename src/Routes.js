// importing modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/products/Products';
import Product from './components/product/Product';
import App from './App';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/product/:id" component={Product} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
    )
}

export default Routes;