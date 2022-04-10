import CarCard from "./CarCard";
import { useState } from "react";
import './Order.css';
import CarModal from "./CarModal";

const Order = () => {
    const [cars, setCars] = useState([{
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
        "pricePerDay":270,
        "lateBonus": 150,
        "gear": "אוטומטי"
    }])

    return (
    <order className="order">
        {cars.map((car, index) => (<CarCard key={index} car={car}/>))}
    </order>
    )
  };

  export default Order;