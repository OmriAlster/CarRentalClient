import { Grid, Item } from "@material-ui/core";
import './CarCard.css'
import { useState } from "react";
import Button from "@restart/ui/esm/Button";
import CarModal from "./CarModal";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import { SiChevrolet } from 'react-icons/si';

const CarCard = ({car}) => {

    const dic = {
        "חברה" : car.brand.title,
        "שנה" : car.year,
        "מספר" : car.num,
        "סניף" : car.place,
        "מחיר יומי" : car.pricePerDay,
        "גיר" : car.gear
    }
    const tab = (attName,str) =>{
        return (
            <span className={attName}>
                <label>{str}</label>
                <a >{dic[str]}</a>
            </span>
        )
    }
    const showModal =()=>{
        swal({
            title: car.name,
            icon: car.photo,
            text : `חברה : ${car.brand.title}
            שנה : ${car.year}
            מספר : ${car.num}
            סניף : ${car.place}
            מחיר כולל : ${car.place}
            `,
            buttons: true,
        }).then((order) => {
            if (order)
                swal("great");
        })
    };

    return (
        <carCard className="carCard" onClick={showModal}>
            <a className="name">{car.name}</a>
            <img src={car.photo} className="photo"></img>
            {tab("company","חברה")}
            {tab("year","שנה")}
            {tab("num","מספר")}
            {tab("place","סניף")}
            {tab("dayPrice","מחיר יומי")}
            {tab("gear","גיר")}
        </carCard>
    )
}

export default CarCard;