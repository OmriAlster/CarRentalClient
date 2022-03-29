import './Header.css'
import  AppLogo  from '../icons/carAppLogo.png'
import { useNavigate } from "react-router-dom";
import { Nav, Navbar as ReactNavbar } from "react-bootstrap";

const Header = ({user}) => {
  const navigate = useNavigate();
  const myStyle = { marginLeft: 10, marginRight: 10 };
  const navStyle = { textAlign: 'center', color: 'white'};

  return (
    <ReactNavbar >
    <header className="header">
        <img alt="dd" src={AppLogo} className="App-Logo"/>
        <Nav.Link  style={myStyle} onClick={() => navigate("/")}>
          <h1 style={navStyle} > Globus Car Rental </h1>
        </Nav.Link>
        {!user.id && <Nav.Link  style={myStyle} onClick={() => navigate("/signUp")}>
          <h1 style={navStyle} > Sign Up</h1>
        </Nav.Link>}
        {!user.id && <Nav.Link style={myStyle} onClick={() => navigate("/login")}>
          <h1 style={navStyle} > Login</h1>
        </Nav.Link>}
        {user.id != undefined && <Nav.Link style={myStyle} onClick={() => navigate("/order")}>
          <h1 style={navStyle} > Order</h1>
        </Nav.Link>}
        {user.id != undefined && <h5 style={navStyle}>שלום, {user.name}</h5>}
    </header>
  </ReactNavbar>
  )
};

export default Header;
