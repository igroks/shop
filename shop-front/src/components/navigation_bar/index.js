import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
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
        {!user.logged && <Typography variant="h9" component="div">
          <StyledLink to="/login">
            Login
          </StyledLink>
        </Typography>}
        {user.logged && <Typography variant="h9" component="div">
          <StyledLink onClick={handleLogout} to="#">
            Logout
          </StyledLink>
        </Typography>}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
