import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";

function SignUp() {

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorLength, setPasswordErrorLength] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const user = useSelector(state => state.user);
  const userTypeId = user.userType === 'collaborator'?1 : 2;

  useEffect(() => {
    if(passwordConfirm !== password) {
      setPasswordError('A senha digitada não é igual a anterior');
    } else {
      setPasswordError('')
    }
    if(password.length < 6 && password != ''){
      setPasswordErrorLength('A senha precisa conter 6 ou mais caracteres'); 
    } else {
      setPasswordErrorLength(''); 
    }
  }, [passwordConfirm, password]);


  const handleSubmit = (e) => {
  
    const newUser = { userTypeId, name, email, password };
    console.log(newUser);
    setIsPending(true);

    e.preventDefault();
    fetch(`http://localhost:3020/users`, { 
      method: 'POST', 
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(resp => {
      console.log(resp);
      return resp.json();
    })
    .then(json =>{
      setIsPending(false);
      console.log(json);
      if(json.errors){
        json.errors.forEach(error => {
          if(error.path === 'name') setNameError(error.message);
        });
      }else{
        console.log("User created!");
      }
    });
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{backgroundColor: 'white', margin:"20px", width:'50%', padding:'30px'}}>
        <div style={{display:'flex', justifyContent: 'center'}}>
          <Typography sx={{fontSize: 32, fontWeight: "bold"}} color="black" gutterBottom>
            Novo Usuário
          </Typography>
        </div>
        <Box component='form' sx={{
          '& .MuiTextField-root': { m: 1 },
        }}>
          <TextField 
            error={nameError !== ''}
            style={{width:'60%'}}
            id="name" 
            label="Nome" 
            variant="outlined" 
            value={name} 
            onChange={
              (e) =>  {
                setName(e.target.value);
                setNameError('');
              }
            }
            helperText={nameError}
          />
          <TextField
            id="email"
            label="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error={passwordErrorLength !== ''}
            id="password"
            label="Senha"
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            helperText={passwordErrorLength}
          />
          <TextField
            error={passwordError !== ''}
            id="confirmationPassword"
            label="Confirme sua senha"
            type="password"
            value={passwordConfirm} 
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
              setPasswordError('');
            }}
            helperText={passwordError}
          />
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            {isPending?
            <Button disabled onClick={handleSubmit}>Enviando...</Button>
            :<Button disabled={passwordErrorLength !== '' || passwordError !== ''} onClick={handleSubmit}>Adicionar</Button>  
            }
          </div>
        </Box>
      </div>
    </div>
  );
}

export default SignUp;
