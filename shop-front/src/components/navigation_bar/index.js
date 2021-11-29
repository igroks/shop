import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from '../../redux/slicer/user';
import { useHistory } from "react-router-dom";

const style = {
  backgroundColor: "#212121",
};

const StyledLink = styled(Link)(() => ({
  color: "white",
  marginRight: 50,
  textDecoration: "none", 
}));

function NavBar() {

  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  }

  const handleLogin = () => {
    history.push('/login');
  }

  const handleCart = () => {
    if(user.logged){
      history.push('/cart');
    }else{
      history.push('/login');
    }
  }
  
  return (
    <AppBar position="static" style={style}>
      <Toolbar>
        <Typography variant="h6" component="div">
          <StyledLink to="/">
            Shop
          </StyledLink>
        </Typography>
        <Typography variant="h9" component="div">
          <StyledLink to="/about">
            Sobre
          </StyledLink>
        </Typography>
        <Typography component="div" style={{marginLeft: "88%"}}>
          <IconButton onClick={handleCart}><Badge badgeContent={cart.length} color="primary"><Icon style={{color:"white"}}>shopping_cart</Icon></Badge></IconButton>
        </Typography>
        <Typography component="div">
          {!user.logged && <Button color="inherit" onClick={handleLogin}>Login</Button>}
          {user.logged && <IconButton onClick={handleLogout}><Icon style={{color:"white"}}>account_circle</Icon></IconButton>}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
