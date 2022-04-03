import TripleCars from '../icons/TripleCars.png'
import BMW from '../icons/bmw.png'
import Car1 from '../icons/Car1.png'
import Corvette from '../icons/corvette.png'
import Spark from '../icons/chevroletSpark.png'
import Mazda3 from '../icons/mazda3.png'
import './HomePage.css'
import { Card, CardGroup } from 'react-bootstrap'


const HomePage = () => {
  return (
  <div style={{backgroundColor:"gainsboro"}} className="homepage">
        <img style={{height:"20vh"}} src={TripleCars}/>
        <h3> גלובוס - האתר שלכם להשכרת רכב</h3>
            <img style={{height:"20vh"}} src={BMW}/>
            <h3> BMW</h3>
      <img  style={{height:"20vh"}} src={Car1}/>
           <img style={{height:"20vh"}} src={Corvette}/>
      <img  style={{height:"20vh"}} src={Spark}/>
      <img  style={{height:"20vh"}} src={Mazda3}/>
  </div>);
};

export default HomePage;
