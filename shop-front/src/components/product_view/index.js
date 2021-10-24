import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";


function ProductView() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3020/products/${id}`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((json) => setProduct(json));
  }, []);

  return(
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", marginTop: 20, width: '65%', justifyContent: "space-between", height: "900px"}}>
        <div style={{backgroundColor: "white", padding:"5px", width: "70%", borderRadius: 7}}>
          <Typography sx={{fontSize: 32, fontWeight: "bold"}} color="black" gutterBottom>
            {product.name}
          </Typography>
          <Typography sx={{fontSize: 16, fontWeight: "bold"}} color="text.secondary" gutterBottom>
            {product.description}
          </Typography>
        </div>
        <div style={{backgroundColor: "white", padding: "10px", width: "27.5%", borderRadius: 7}}>
          <Typography sx={{fontSize: 16, fontWeight: "bold"}} color="text.secondary" gutterBottom>
            {product.price}
          </Typography>
        </div>
      </div>  
    </div>
  );
}

export default ProductView;
