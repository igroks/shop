import NavBar from './components/navigation_bar';
import ProductsList from './components/products_list';
import ProductsView from './components/products_view';
import ProductsAdd from './components/products_add';
import About from './components/about';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={ProductsList}/>
        <Route path="/products/add" exact component={ProductsAdd}/>
        <Route path="/products/:id" exact component={ProductsView}/>
        <Route path="/about" exact component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
