import * as React from 'react';
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from "react-redux";

function ProductsView() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const user = useSelector(state => state.user);

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
          <Typography sx={{fontSize: 16, fontWeight: "bold"}} color="text.secondary" gutterBottom>
            {product.price}
          </Typography>
        </div>
      </div>  
    </div>
  );
}

export default ProductsView;
