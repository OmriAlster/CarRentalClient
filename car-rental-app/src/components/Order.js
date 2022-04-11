import CarCard from "./CarCard";
import { useState, useEffect } from "react";
import { Button, Modal} from "react-bootstrap"
import { useLocalStorage } from "../UseLocalStorge";
import './Order.css';
import CarModal from "./CarModal";

const Order = () => {
    const [cars, setCars] = useState([{
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
        "name" : " + שברולט ספארק",
        "photo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGryn32vH5Pbq2evqjgwCBsjjPdK3SoI2kQ&usqp=CAU",
        "brand" : {
            "title" : "שברולט",
            "img" : "https://upload.wikimedia.org/wikipedia/he/3/34/Chevrolet_logo.png"
        },
        "year" : "2010",
        "num" : "4352534",
        "place" : "ירושלים",
        "correct" : true,
        "available" : false,
        "pricePerDay":400,
        "lateBonus": 150,
        "gear": "אוטומטי"
    } , {
        "id" : 3,
        "name" : " S שברולט ספארק",
        "photo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGryn32vH5Pbq2evqjgwCBsjjPdK3SoI2kQ&usqp=CAU",
        "brand" : {
            "title" : "שברולט",
            "img" : "https://upload.wikimedia.org/wikipedia/he/3/34/Chevrolet_logo.png"
        },
        "year" : "2022",
        "num" : "25226701",
        "place" : "סתום",
        "correct" : true,
        "available" : false,
        "pricePerDay":199,
        "lateBonus": 150,
        "gear": "אוטומטי"
    } , {
        "id" : 4,
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
        "pricePerDay":275,
        "lateBonus": 150,
        "gear": "אוטומטי"
    } ,{
        "id" : 5,
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
    const [modalCar, setModalCar] = useState({});
    const [interest, setInterest] = useLocalStorage("interest", [])
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleOpen = (car) => {
        setShow(true);
        setModalCar(car);
        setInterest([car , ...interest.filter((item) => item.id !== car.id)]);
    }

    return (
    <order className="order">
        {cars.map((car, index) => (<a onClick={()=>handleOpen(car)}><CarCard key={index} car={car}/></a>))}
        <CarModal car={modalCar} show={show} handleClose={handleClose}></CarModal>
    </order>
    )
  };

  export default Order;