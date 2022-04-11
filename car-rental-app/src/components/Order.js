import CarCard from "./CarCard";
import { useState, useEffect } from "react";
import { Button, Modal} from "react-bootstrap"
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
        "pricePerDay":280,
        "lateBonus": 150,
        "gear": "אוטומטי"
    }, {
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
  //  const [interest, setInterest] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleOpen = (car) => {
        setShow(true);
        setModalCar(car);
      //  setInterest(interest.filter((item) => item !== car));
     //   setInterest(interest.push(car));
      //  localStorage.setItem("interests", JSON.stringify(interest));
    }

    // useEffect(() => {
    //     let currInterest = JSON.parse(localStorage.getItem('interests'));
    //     if (currInterest)
    //         setInterest(currInterest);
    //   }, [interest]);

    return (
    <order className="order">
        {cars.map((car, index) => (<a onClick={()=>handleOpen(car)}><CarCard key={index} car={car}/></a>))}
        <CarModal car={modalCar} show={show} handleClose={handleClose}></CarModal>
    </order>
    )
  };

  export default Order;