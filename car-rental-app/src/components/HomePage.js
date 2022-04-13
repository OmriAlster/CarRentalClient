import TripleCars from '../icons/TripleCars.png'
import BMW from '../icons/bmw.png'
import Car1 from '../icons/Car1.png'
import Corvette from '../icons/corvette.png'
import Spark from '../icons/chevroletSpark.png'
import Mazda3 from '../icons/mazda3.png'
import './HomePage.css'


const HomePage = () => {
  return (
  <div className="homepage">
      <img alt="a" style={{height:"20vh"}} src={TripleCars}/>
      <h3> גלובוס - האתר שלכם להשכרת רכב</h3>
          <img alt="a" style={{height:"20vh"}} src={BMW}/>
          <h3> BMW</h3>
      <img alt="a" style={{height:"20vh"}} src={Car1}/>
          <img alt="a" style={{height:"20vh"}} src={Corvette}/>
      <img alt="a" style={{height:"20vh"}} src={Spark}/>
      <img alt="a" style={{height:"20vh"}} src={Mazda3}/>
  </div>);
};

export default HomePage;
