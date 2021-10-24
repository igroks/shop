import { useState, useEffect } from "react";
import ProductCard from "../products_card";
import SearchBar from "../search_bar";
import utils from "../../utils";
import { Link } from "react-router-dom";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
      <div style={{ display: "flex", margin: "20px" }}>
        {query === ""
          ? products.map((prod) => (
              <Link to={`/product/${prod.id}`} style={linksStyle}>
                <div key={prod.id} style={{ margin: "5px" }}>
                  <ProductCard product_name={prod.name} price={prod.price}/>
                </div>
              </Link>
            ))
          : searchResult.map((prod) => (
              <Link to={`/product/${prod.id}`} style={linksStyle}>
                <div key={prod.id} style={{ margin: "5px" }}>
                  <ProductCard product_name={prod.name} price={prod.price}/>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

export default ListProducts;
