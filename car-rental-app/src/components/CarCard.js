import { Grid, Item } from "@material-ui/core";
import './CarCard.css'

const CarCard = () => {
    const car = {
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
    }

    return (
        <carCard className="carCard" >
            <a className="name">{car.name}</a>
            <img src={car.photo} className="photo"></img>
            <span className="team">
            <label>חברה</label>
            <a >{car.brand.title}</a>
            </span>
            <span className="ppg">
            <label>שנה</label>
            <a >{car.year}</a>
            </span>
            <span className="pt3">
            <label>מספר רכב</label>
            <a >{car.num}</a>
            </span>
            <span className="rpg">
            <label>סניף</label>
            <a >{car.place}</a>
            </span>
            <span className="apg">
            <label>תקין</label>
            <a>{car.correct ? "yes" : "no"}</a>
            </span>
            <span className="spg">
            <label>זמין</label>
            <a>{car.available ? "yes" : "no"}</a>
            </span>
        </carCard>
    )
}

export default CarCard;