import { useState, useEffect } from "react";
import ProductsCard from "../products_card";
import SearchBar from "../search_bar";
import utils from "../../utils";
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import { Link,  useHistory  } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const history = useHistory();
  const user = useSelector(state => state.user);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleNewProduct = () => {
    history.push('/products/add');
  };

  const handleNewUser = () => {
    history.push('/signup');
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
  }, [query, products]);

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
                  <ProductsCard product={prod}/>
                </div>
              </Link>
            ))
          : searchResult.map((prod) => (
              <Link to={`/products/${prod.id}`} style={linksStyle}>
                <div key={prod.id} style={{ margin: "7px" }}>
                  <ProductsCard product={prod}/>
                </div>
              </Link>
            ))}
      </div>
      {
        user.userType === 'collaborator' &&
          <Fab style={{position: 'fixed', bottom: '0.5%', right: '0.5%'}} color="primary" aria-label="add" onClick={handleClick}>
            <Icon>add</Icon>
          </Fab>
      }
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleNewUser}>Usuário</MenuItem>
        <MenuItem onClick={handleNewProduct}>Produto</MenuItem>
      </Menu>
    </div>
  );
}

export default ProductsList;
