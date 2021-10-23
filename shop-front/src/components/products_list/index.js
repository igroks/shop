import { useState, useEffect } from "react";
import ProductCard from "../products_card";
import SearchBar from "../search_bar";

function ListProducts() {

    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3020/products", { credentials: 'include' })
        .then(resp => resp.json())
        .then(json => setProducts(json));     
    }, []);

    useEffect(() => {
        setSearchResult(products.filter(prod => prod.name.toLowerCase().includes(query.toLowerCase())))
    }, [query]);

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <SearchBar value={query} onChange={(e) => setQuery(e.target.value)}/>
            </div>   
            <div style={{display: "flex", margin: "20px"}}>
                {
                    query === ""?
                    products.map(prod => <div key={prod.id} style={{margin: "5px"}}><ProductCard product_name = {prod.name} /></div>):
                    searchResult.map(prod => <div key={prod.id} style={{margin: "5px"}}><ProductCard product_name = {prod.name} /></div>)
                }
            </div>
        </div>       
    );
}
 
export default ListProducts;
 