import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../../redux/slicer/user';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3020/login`, { 
      method: 'POST', 
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then(resp => {
        if(resp.status === 401){
          setError(true);
        }
        return resp.json();
      })
      .then(json => {
        console.log(json);
        if(error){
          dispatch(login(json));
          history.push('/');
        }        
      });
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{backgroundColor: 'white', marginTop:"12%", height:"500px", borderRadius:"5px", minWidth:"560px", padding:"15px"}}>
        <Typography sx={{display: "flex", justifyContent: "center", fontSize: 32, fontWeight: "bold"}} color="black" gutterBottom>
          Olá, Bem-Vindo(a) ao Shop
        </Typography>
        <Typography sx={{display: "flex", justifyContent: "center", fontSize: 20, fontWeight: "bold"}} color="black" gutterBottom>
          Sua loja referência em e-commerce!
        </Typography>
        <div style={{marginBottom:"25px", marginTop:"70px"}}>
          <TextField
            id="email"
            label="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </div>
        <div style={{marginBottom:"25px"}}>
          <TextField
            id="password"
            label="Senha"
            value={password} 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </div>
        <div style={{display: "flex", justifyContent: "center", marginBottom:"25px"}} >
          <Button onClick={handleClick} variant="contained" size="large">Entrar</Button>
        </div>
        <div>
          {
            error && <Alert severity="error">Email e/ou senha inválidos</Alert>
          }
        </div>
        <div style={{position:"fixed", marginTop:"15px"}}>
          Ainda não tem cadastro? <Link to="/signup">Cadastra-se</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
