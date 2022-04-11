import { useState } from "react";
import "./CarCard.css"
import { useLocalStorage } from "../UseLocalStorage";
import CarModal from "./CarModal";

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
    const [interest, setInterest] = useLocalStorage("interest", [])
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleOpen = () => {
        setShow(true);
        setInterest([car , ...interest.filter((item) => item.id !== car.id)]);
    }

    return (
        <carCard>
            <section>
                <section onClick={()=>handleOpen(car)} className="carCard">
                <a className="name">{car.name}</a>
                <img src={car.photo} className="photo"></img>
                {tab("company","חברה")}
                {tab("year","שנה")}
                {tab("num","מספר")}
                {tab("place","סניף")}
                {tab("dayPrice","מחיר יומי")}
                {tab("gear","גיר")}
                </section>
                <CarModal car={car} show={show} handleClose={handleClose}></CarModal>
            </section>
        </carCard>
    )
}

export default CarCard;