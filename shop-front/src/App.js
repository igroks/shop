import NavBar from './components/navigation_bar';
import ProductsList from './components/products_list';
import ProductsView from './components/products_view';
import ProductsAdd from './components/products_add';
import About from './components/about';
import ProductsEdit from './components/product_edit';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={ProductsList}/>
        <Route path="/products/add" exact component={ProductsAdd}/>
        <Route path="/products/:id" exact component={ProductsView}/>
        <Route path="/products/:id/edit" exact component={ProductsEdit}/>
        <Route path="/about" exact component={About}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={SignUp}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
