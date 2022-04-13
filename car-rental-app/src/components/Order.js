import CarCard from "./CarCard";
import { useState } from "react";
import './Order.css';
import {FaFilter} from'react-icons/fa';
import Filter from "./Filter";

const Order = () => {
    const [cars] = useState([{
        "id" : 1,
        "name" : "שברולט ספארק",
        "photo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGryn32vH5Pbq2evqjgwCBsjjPdK3SoI2kQ&usqp=CAU",
        "brand" : {
            "title" : "שברולט",
            "img" : "https://upload.wikimedia.org/wikipedia/he/3/34/Chevrolet_logo.png"
        },
        "year" : "2018",
        "num" : "25226701",
        "place" : "תל מונד",
        "correct" : true,
        "available" : false,
        "pricePerDay":280,
        "lateBonus": 150,
        "gear": "אוטומטי"
    }, {
        "id" : 2,
        "name" : "BMW 12",
        "photo" : require('../icons/bmw.png'),
        "brand" : {
            "title" : "BMW",
            "img" : "https://upload.wikimedia.org/wikipedia/he/3/34/Chevrolet_logo.png"
        },
        "year" : "2021",
        "num" : "4352534",
        "place" : "ירושלים",
        "correct" : true,
        "available" : false,
        "pricePerDay":1040,
        "lateBonus": 340,
        "gear": "ידני"
    } , {
        "id" : 3,
        "name" : "מאזדה 3",
        "photo" : require('../icons/mazda3.png'),
        "brand" : {
            "title" : "מאזדה",
            "img" : "https://upload.wikimedia.org/wikipedia/he/3/34/Chevrolet_logo.png"
        },
        "year" : "2010",
        "num" : "4424252",
        "place" : "סתום",
        "correct" : true,
        "available" : false,
        "pricePerDay":199,
        "lateBonus": 150,
        "gear": "אוטומטי"
    } , {
        "id" : 4,
        "name" : "S קורבט",
        "photo" : require('../icons/corvette.png'),
        "brand" : {
            "title" : "קורבט",
            "img" : "https://upload.wikimedia.org/wikipedia/he/3/34/Chevrolet_logo.png"
        },
        "year" : "2018",
        "num" : "25226701",
        "place" :  "ג'יג'י",
        "correct" : true,
        "available" : false,
        "pricePerDay":540,
        "lateBonus": 200,
        "gear": "אוטומטי"
    } ,{
        "id" : 5,
        "name" : "מרצדס מכוער",
        "photo" : require('../icons/Car1.png'),
        "brand" : {
            "title" : "מרצדס",
            "img" : "https://upload.wikimedia.org/wikipedia/he/3/34/Chevrolet_logo.png"
        },
        "year" : "2018",
        "num" : "355233",
        "place" : "אמצע המדבר",
        "correct" : true,
        "available" : false,
        "pricePerDay":2,
        "lateBonus": 150,
        "gear": "ידני"
    }])
    const [showFilter,setFilter] = useState(false);
    const [years,setYears] = useState({start:1999,end:2022});
    const [dates, setDates] = useState({start:undefined,end:undefined})
    const [price, setPrice] = useState({start:undefined,end:undefined})

    return (
    <order>
        <section className="filter">
        <FaFilter className="filterIcon" onClick={()=> setFilter(!showFilter)}/>
        {showFilter && <Filter  price={{set:setPrice,get:price}} dates={{set:setDates,get:dates}} years={{set:setYears,get:years}}></Filter>}
        </section>
        <section className="order">
        {cars.filter(car => car.year >= years.start && car.year <= years.end).map((car, index) => (<CarCard key={index} car={car}/>))}
        </section>
    </order>
    )
  };

  export default Order;