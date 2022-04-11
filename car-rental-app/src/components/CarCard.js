import { Grid, Item } from "@material-ui/core";
import { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import { SiChevrolet } from 'react-icons/si';
import "./CarCard.css"

const CarCard = ({car}) => {

    const days = 0;
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
            תאריך התחלה : ${car.year}
            תאריך סיום : ${car.num}
            מחיר כולל : ${car.pricePerDay * days}
            `,
            buttons: true,
        }).then((order) => {
            if (order)
                swal("great");
        })
    };

    return (
        <carCard className="carCard">
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