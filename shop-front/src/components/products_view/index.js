import * as React from 'react';
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import utils from "../../utils";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { add } from '../../redux/slicer/cart'
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';


function ProductsView() {
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const history = useHistory();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3020/products/${id}`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((json) => setProduct(json));
  }, [id]);

  const handleClick = () => {
    history.goBack(-1);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    history.push(`/products/${id}/edit`)
  }

  const handleDelete = () => {
    fetch(`http://localhost:3020/products/${id}`, { 
      credentials: "include",
      method: 'DELETE' 
    })
      .then((resp) => resp.json())
      .then(() => {
        history.push('/');
      });
  }

  const handleAddToCart = () => {
    dispatch(add({...product, amount}));
  }

  const handleBuyNow = () => {
    dispatch(add({...product, amount}));
    history.push('/cart');
  }

  return(
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", marginTop: 20, width: '65%', justifyContent: "space-between", height: "900px"}}>
        <div style={{backgroundColor: "white", width: "70%", borderRadius: 7}}>
          <div>
            <div style={{display:"inline"}}>
              <IconButton size="small" style={{margin: "5px 5px 5px 5px"}} onClick={handleClick}><Icon>west</Icon></IconButton>
            </div>
            {user.userType === 'collaborator' && <div style={{display:"inline", float: "right", margin: "5px 5px 5px 5px"}}>
                <IconButton size="small" onClick={handleClickMenu}><Icon>menu</Icon></IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleEdit}>Editar</MenuItem>
                  <MenuItem onClick={handleDelete}>Excluir</MenuItem>
                </Menu>
            </div>} 
          </div>
          <Typography sx={{fontSize: 32, fontWeight: "bold", margin: "15px"}} color="black" gutterBottom>
            {product.name}
          </Typography>
          <Typography sx={{fontSize: 16, fontWeight: "bold", margin: "15px"}} color="text.secondary" gutterBottom>
            {product.description}
          </Typography>
        </div>
        <div style={{backgroundColor: "white", padding: "10px", width: "28%", borderRadius: 7}}>
          <Typography sx={{fontSize: 28, fontWeight: "bold"}} color="text.secondary" gutterBottom>
            {utils.formatPrice(`${product.price}`)}
          </Typography>
          <Typography sx={{fontSize: 11}} color="text.primary">
            em até 10x sem juros no cartão de crédito
          </Typography>
          <Divider variant="middle" style ={{marginTop:"15px"}}/>
          <div style={{marginTop:"300px"}}>
          <Typography sx={{fontSize: 14, fontWeight: "bold"}} color="text.primary">
              Quantidade:
            </Typography>
            <ButtonGroup size="large" aria-label="large button group">
              <Button size="small" onClick={() => {
                  if(amount - 1 > 0) setAmount(amount-1); 
                }} key="one"><Icon>remove</Icon></Button>,
              <TextField size="small" value={amount} id="outlined-basic" variant="outlined" onChange={(e) => {
                  if(e.target.value > 0 && e.target.value <= product.inventory)setAmount(e.target.value);
                }}/>
              <Button size="small" onClick={() => {
                  if(amount + 1 <= product.inventory) setAmount(amount+1);
                }} key="three"><Icon>add</Icon></Button>,
            </ButtonGroup>
            <Typography sx={{fontSize: 14, fontWeight: "bold"}} color="text.primary">
              Estoque disponível: {product.inventory}
            </Typography>
          </div>
          <Divider variant="middle" style={{marginTop: "300px"}} />
          <div style={{marginTop: "15px"}}>
            <div style={{display:"flex", justifyContent:"center", marginBottom: "5px"}}>
              <Button onClick={handleAddToCart} variant="outlined" size="large" fullWidth>
                Adicionar ao Carinho
              </Button>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginBottom: "5px"}}>
              <Button onClick={handleBuyNow} variant="contained" size="large" fullWidth>
                Comprar Agora
              </Button>
            </div>            
          </div>
        </div>
      </div>  
    </div>
  );
}

export default ProductsView;
