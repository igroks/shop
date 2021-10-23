import { useState, useEffect } from "react";
import ProductCard from "../products_card";

function ListProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3020/products", { credentials: 'include' })
        .then(resp => resp.json())
        .then(json => setProducts(json));     
    }, []);

    const style = {
        marginBottom: "5px"
    }

    return (
        <div>
            <h3>Listagem de Produtos</h3>
            {products.map(prod => <div style={style}><ProductCard style={style} product_name = {prod.name} /></div>)} 
        </div>       
    );
}
 
export default ListProducts;
 