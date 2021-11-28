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
        dispatch(login(json));
        history.push('/');
      })
  }

  return (
    <div>
      <h3>Login</h3>
      <form>
        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <label htmlFor="password">Senha:</label>
        <input 
          type="password" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleClick}>Entrar</button>
      </form>
      <div>
        <Link to="/signup">
          Criar conta
        </Link>
      </div>
    </div>
  );
}

export default Login;
