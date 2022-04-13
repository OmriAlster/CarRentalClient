import './Header.css'
import  AppLogo  from '../icons/carAppLogo.png'
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Nav, Navbar as ReactNavbar,  } from "react-bootstrap";
import { RiLogoutCircleLine } from 'react-icons/ri';

const Header = ({user, logoutUser}) => {
  const navigate = useNavigate();
  const myStyle = { marginLeft: 15, marginRight: 15 };
  const navStyle = { textAlign: 'center', color: 'white'};
  const linkStyle = {}

  const logout =()=> {
    swal(
      {
        title: "השתגעת?",
        text: "אתה בטוח שאתה רוצה להתנתק?",
        icon: "info",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
          logoutUser()
        }});
  }

  const link=(path, text)=>{
    return (
      <div className="link" style={myStyle} onClick={() => navigate(path)}>
        {text}
      </div>
    )
  }

  return (
    <ReactNavbar >
    <header className="header">
      <div className="leftSide">
        <img alt="dd" src={AppLogo} className="App-Logo"/>
        {link("/","השכרת רכב גלובוס בע''מ")}
        </div>
        <div className="rightSide">
        {(!user || !user.id) && <>{link("/signUp","SignUp")}
        {link("/login","כניסה")}</>}
        {user !== undefined && user.id !== undefined && <>{link("/order","להזמין")}
        {link("/history","היסטוריה")}
        <h3 style={navStyle , myStyle}>שלום, {user.name}</h3>
        <span onClick={logout}><RiLogoutCircleLine className="logout" size={35} style={navStyle,myStyle,{color:'black'}}/></span>
        </>}
      </div>
    </header>
  </ReactNavbar>
  )
};

export default Header;
