import { useState } from "react";
import './Header.css'

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    return (
    <login className="login">
        <h1>Login Page</h1>
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
    </login>
    )
  };
  
export default Login;