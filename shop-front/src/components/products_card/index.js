import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import utils from "../../utils";

const StyledCard = styled(Card)(() => ({
  minWidth: 345,
  maxWidth: 345,
  minHeight: 450,
  maxHeight: 450  
}));

const CardProductName = styled(Typography)(() => ({
  fontSize: 16, 
  fontWeight: "bold" 
}));

const CardProductPrice = styled(Typography)(() => ({
  fontSize: 24, 
  fontWeight: "bold",
  color: "black" 
}));

const SyledCardActions = styled(CardActions)(() => ({
  display: "flex", 
  justifyContent: "flex-end", 
  marginTop: "-40px" 
}));

function ProductCard(props) {
  return (
    <div>
      <StyledCard>
        <CardMedia
          component="img"
          height="340"
          image="/static/images/products_card/box.jpg"
          alt="product image"
        />
        <CardContent>
          <CardProductName color="text.secondary" gutterBottom>
            {props.product_name}
          </CardProductName>
          <CardProductPrice gutterBottom>
            {utils.formatPrice(props.price)}
          </CardProductPrice>
        </CardContent>
        <SyledCardActions>
          <Button size="small">Adicionar ao carrinho</Button>
        </SyledCardActions>
      </StyledCard>
    </div>
  );
}

export default ProductCard;
