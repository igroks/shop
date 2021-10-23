import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const style = {
  backgroundColor: "#212121",
};

const linksStyle = {
  color: "white",
  marginRight: 50,
  textDecoration: "none",
};

function NavBar() {
  return (
    <AppBar position="static" style={style}>
      <Toolbar>
        <Typography variant="h6" component="div">
          <Link to="/" underline="none" style={linksStyle}>
            Shop
          </Link>
        </Typography>
        <Typography variant="h9" component="div">
          <Link to="/about" underline="none" style={linksStyle}>
            Sobre
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
