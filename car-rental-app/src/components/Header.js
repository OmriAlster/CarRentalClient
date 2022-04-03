import './Header.css'
import  AppLogo  from '../icons/carAppLogo.png'
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Nav, Navbar as ReactNavbar,  } from "react-bootstrap";
import { useEffect, useState } from "react";
import { RiLogoutCircleLine } from 'react-icons/ri';

const Header = () => {
  const navigate = useNavigate();
  const myStyle = { marginLeft: 15, marginRight: 15 };
  const navStyle = { textAlign: 'center', color: 'white'};
  const [user, setUser] = useState();
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, user);

  const logout =()=> {
    swal(
      {
        title: "השתגעת?",
        text: "אתה בטוח שאתה רוצה להתנתק?",
        icon: "info",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
          localStorage.removeItem('user');
          setUser();
        }});
    // confirmAlert({
    //   title: 'Logout',
    //   message: 'בטוח שבאלך להתנתק?',
    //   buttons: [
    //     {
    //       label: 'כן',
    //       onClick: () => {localStorage.removeItem('user');
    //       setUser();}
    //     },
    //     {
    //       label: 'לא',
    //       onClick: () => {}
    //     }]
    // });

 //   localStorage.removeItem('user');
 //   setUser();
  }

  return (
    <ReactNavbar >
    <header className="header">
      <div className="leftSide">
        <img alt="dd" src={AppLogo} className="App-Logo"/>
        <Nav.Link  style={myStyle} onClick={() => navigate("/")}>
          <h1 style={navStyle} > Globus Car Rental </h1>
        </Nav.Link>
        </div>
        <div className="rightSide">
        {!user && <Nav.Link  style={myStyle} onClick={() => navigate("/signUp")}>
          <h1 style={navStyle} > Sign Up</h1>
        </Nav.Link>}
        {!user && <Nav.Link style={myStyle} onClick={() => navigate("/login")}>
          <h1 style={navStyle} > Login</h1>
        </Nav.Link>}
        {user != undefined && <Nav.Link style={myStyle} onClick={() => navigate("/order")}>
          <h1 style={navStyle} > Order</h1>
        </Nav.Link>}
        {user != undefined && <h3 style={navStyle, myStyle}>שלום, {user.name}</h3>}
        {user != undefined && <span onClick={logout}><RiLogoutCircleLine size={35} style={navStyle,myStyle,{color:'black'}}/></span>}
      </div>
    </header>
  </ReactNavbar>
  )
};

export default Header;
