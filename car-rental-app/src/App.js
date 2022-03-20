import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Order from './components/Order';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
          <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order" element={<Order />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
