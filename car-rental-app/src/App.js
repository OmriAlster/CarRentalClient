import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Order from './components/Order';
import SignUp from './components/SignUp';
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const submitTask = (newUser) =>
  {
    users.push(newUser)
    setUsers(users);
    console.log(users);
  }

  const loginUser = (details) => {
    let a = users.find(user => user.password === details.password && user.email === details.email);
    if (a != undefined){
      setUser(a)
      return true; }
    return false;
  }

  return (
    <div className="App">
          <Router>
          <Header user={user} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login onSubmit={loginUser}/>} />
            <Route path="/order" element={<Order />} />
            <Route path="/signUp" element={<SignUp onSubmit={submitTask}  />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
