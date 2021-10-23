import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const style = {
    backgroundColor: "#212121"
}

function NavBar() {
    return (
        <AppBar position="static" style={style}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Shop
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;