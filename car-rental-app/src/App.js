import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Order from './components/Order';
import SignUp from './components/SignUp';
import  History  from './components/History';
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let localUsers = JSON.parse(localStorage.getItem('users'));
    if (localUsers)
      setUsers(localUsers);
  }, users);

  const submitTask = (newUser) =>
  {
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users));
  }

  const loginUser = (details) => {
    let a = users.find(user => user.password === details.password && user.email === details.email);
    if (a != undefined){
      localStorage.setItem("user", JSON.stringify(a));
      return true; }
    return false;
  }

  return (
    <div className="App">
          <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login onSubmit={loginUser}/>} />
            <Route path="/order" element={<Order />} />
            <Route path="/signUp" element={<SignUp onSubmit={submitTask}  />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
