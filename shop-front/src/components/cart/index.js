import { useSelector } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import utils from "../../utils";

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

function Cart() {
  const cart = useSelector((state) => state.cart);
  const products = cart.products;

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{backgroundColor: "white", marginTop: 20, width: '70%', height: "900px"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <h2>Carrinho</h2>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            {products.map((prod) => (
              <ListItem button divider>
                <ListItemText primary={prod.name} />
                <ListItemText secondary={prod.amount} />
                <ListItemText secondary={utils.formatPrice(prod.price)}/>
              </ListItem>
            ))}
            <ListItem style={{backgroundColor: "#363636"}} button divider>
                <ListItemText style={{color:"white"}} primary="Total" />
                <ListItemText style={{color:"white"}} primary={cart.length}/>
                <ListItemText style={{color:"white"}} primary={utils.formatPrice(`${cart.total}`)}/>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Cart;
