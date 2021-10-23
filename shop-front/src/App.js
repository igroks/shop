import NavBar from './components/navigation_bar';
import Products from './components/products_list';
import About from './components/about';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div>
        <Switch>
          <Route path="/" exact component={Products}/>
          <Route path="/about" exact component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
