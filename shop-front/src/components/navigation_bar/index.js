import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const style = {
  backgroundColor: "#212121",
};

const StyledLink = styled(Link)(() => ({
  color: "white",
  marginRight: 50,
  textDecoration: "none", 
}));

function NavBar() {
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
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
