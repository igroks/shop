import { useState, useEffect } from "react";
import ProductsCard from "../products_card";
import SearchBar from "../search_bar";
import utils from "../../utils";
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import { Link,  useHistory  } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const history = useHistory();

  const handleClick = () => {
    history.push('/products/add');
  }

  useEffect(() => {
    fetch("http://localhost:3020/products", { credentials: "include" })
      .then((resp) => resp.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    setSearchResult(
      products.filter((prod) =>
        utils.normalizeQuery(prod.name).includes(utils.normalizeQuery(query))
      )
    );
  }, [query]);

  const linksStyle = {
    textDecoration: "none",
  };

  return (
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <SearchBar value={query} onChange={(e) => setQuery(e.target.value)}/>
      </div>
      <div style={{ display: "flex", padding: "50px", flexWrap: 'wrap', justifyContent: "center"}}>
        {query === ""
          ? products.map((prod) => (
              <Link to={`/products/${prod.id}`} style={linksStyle}>
                <div key={prod.id} style={{ margin: "7px" }}>
                  <ProductsCard product_name={prod.name} price={prod.price}/>
                </div>
              </Link>
            ))
          : searchResult.map((prod) => (
              <Link to={`/products/${prod.id}`} style={linksStyle}>
                <div key={prod.id} style={{ margin: "7px" }}>
                  <ProductsCard product_name={prod.name} price={prod.price}/>
                </div>
              </Link>
            ))}
      </div>
      <Fab style={{position: 'fixed', top: '93%', right: '0.5%'}} color="primary" aria-label="add" onClick={handleClick}>
        <Icon>add</Icon>
      </Fab>
    </div>
  );
}

export default ProductsList;
