import NavBar from './components/navigation_bar';
import ProductsList from './components/products_list';
import ProductView from './components/product_view';
import About from './components/about';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={ProductsList}/>
        <Route path="/product/:id" exact component={ProductView}/>
        <Route path="/about" exact component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
