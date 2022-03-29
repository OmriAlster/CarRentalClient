import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'

const Login = ({onSubmit}) => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [logOn, setLogOn] = useState(true);
    const navigate = useNavigate();

    const updateLogOn = (e) => {
      if (onSubmit({ "email":loginEmail, "password": loginPassword }))
      {
        setLogOn(true);
        navigate("/"); 
      } else {
        setLogOn(false);
        e.preventDefault();
      }
    }

    return (
    <login className="login">
        <h1>Login Page</h1>
        <form className='signUp-form' onSubmit={updateLogOn}>
        <div className='form-control'>
            <label>אימייל</label>
            <input type='email' placeholder='אימייל'
            value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required/>
        </div>
        <div className='form-control'>
            <label>סיסמא</label>
            <input type='password' placeholder='סיסמא'
            value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required/>
        </div>
        <input type='submit' className='btn btn-block'/>
        </form>
        {!logOn ? <h3>error in login</h3> : <a/>}
    </login>
    )
  };
  
export default Login;