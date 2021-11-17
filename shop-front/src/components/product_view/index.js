import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

function ProductView() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3020/products/${id}`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((json) => setProduct(json));
  }, []);

  const handleClick = () => {
    history.goBack(-1);
  }

  return(
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", marginTop: 20, width: '65%', justifyContent: "space-between", height: "900px"}}>
        <div style={{backgroundColor: "white", width: "70%", borderRadius: 7}}>
          <IconButton size="small" style={{margin: "5px 5px 5px 5px"}} onClick={handleClick}><Icon>west</Icon></IconButton>
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

export default ProductView;
