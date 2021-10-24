import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProductCard(props) {
  return (
    <div>
      <Card sx={{ 
        minWidth: 345,
        maxWidth: 345,
        minHeight: 450,
        maxHeight: 450  
      }}>
        <CardMedia
          component="img"
          height="340"
          image="/static/images/products_card/box.jpg"
          alt="product image"
        />
        <CardContent>
          <Typography sx={{fontSize: 16, fontWeight: "bold"}} color="text.secondary" gutterBottom>
            {props.product_name}
          </Typography>
          <Typography sx={{fontSize: 24, fontWeight: "bold", color: "black"}} color="text.secondary" gutterBottom>
            R$ {props.price.replace(".",",")}
          </Typography>
        </CardContent>
        <CardActions style={{display: "flex", justifyContent: "flex-end", marginTop: "-40px"}}>
          <Button size="small">Vizualizar</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductCard;
