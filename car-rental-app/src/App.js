import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Order from './components/Order';
import SignUp from './components/SignUp';
import  History  from './components/History';
import { useLocalStorage } from './UseLocalStorage';

function App() {
  const [users, setUsers] = useLocalStorage("users",[])
  const [user, setUser] = useLocalStorage("user",{})

  const submitTask = (newUser) =>
  {
    setUsers([...users, newUser])
  }

  const loginUser = (details) => {
    let a = users.find(user => user.password === details.password && user.email === details.email);
    if (a !== undefined){
      setUser(a);
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
