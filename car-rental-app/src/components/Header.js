import './Header.css'
import  AppLogo  from '../icons/carAppLogo.png'
import { useNavigate } from "react-router-dom";
import { Nav, Navbar as ReactNavbar } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const myStyle = { marginLeft: 10, marginRight: 10 };

  return (
    <ReactNavbar >
    <header className="header">
        <img alt="dd" src={AppLogo} className="App-Logo"/>
        <h1 style={{ textAlign: 'center', color: 'white'}}> Globus Car Rental</h1>
        <Nav.Link  style={myStyle} onClick={() => navigate("/")}>
          <h1 style={{ textAlign: 'center', color: 'white'}} > Home</h1>
        </Nav.Link>
        <Nav.Link  style={myStyle} onClick={() => navigate("/signUp")}>
          <h1 style={{ textAlign: 'center', color: 'white'}} > Sign Up</h1>
        </Nav.Link>
        <Nav.Link style={myStyle} onClick={() => navigate("/login")}>
          <h1 style={{  textAlign: 'center', color: 'white'}} > Login</h1>
        </Nav.Link>
        <Nav.Link style={myStyle} onClick={() => navigate("/order")}>
          <h1 style={{ textAlign: 'center', color: 'white'}} > Order</h1>
        </Nav.Link>
    </header>
  </ReactNavbar>
  )
};

export default Header;
