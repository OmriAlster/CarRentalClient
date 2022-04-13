import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import "./CarModal.css";
import { AiOutlineClose } from 'react-icons/ai';
import {dayString, Today, Tomorrow} from "../Dates";

const CarModal = ( {car, handleClose, show}) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [start, setStart] = useState(Today());
  const [end, setEnd] = useState();
  const [price, setPrice] = useState(0);

  useEffect(() => { setPrice(diffDays(start, end) * car.pricePerDay, price) });

  const order = () => {
    if (price === 0)
      swal("ההזמנה בבעיה", "תאריכים לא תקינים", "warning");
    else 
      swal("הזמנתך בוצעה", "תודה על הזמנתך, מחכים לך כבר ", "success");
      
    handleClose();
  }

  const diffDays = (start, end) => {
    let price = Math.floor((Date.parse(end)-Date.parse(start))/(24*3600*1000));
    return price > 0 ? price : 0;
  }

    return (
      <carModal className={showHideClassName}>
        <section className="modal-main" style={{alignItems:"center"}}>
          <section style={{display:"flex",flexDirection:"row",alignSelf:"stretch"}}>
            <AiOutlineClose size={55} style={{alignSelf:"flex-start"}} onClick={handleClose} />
            <h1 style={{alignSelf:"center"}}>{car.name}</h1>
          </section>
          <img src={car.photo} className="photo" style={{width:"300px", height:"200px"}}></img>
            <label>התחלה:</label>
            <input type='date' min={Today()} max={end} value={start} onChange={(e) => setStart(e.target.value)}/>
            <label>סיום:</label>
            <input type='date' min={Tomorrow()} value={end}  onChange={(e) => setEnd(e.target.value)}/>
            { price !== 0 &&
            <> <label>מחיר כולל:</label>
            <h1>{`${price} $`}</h1></> }
          <Button className="btn" type="button" onClick={order}>הזמן</Button>
        </section>
      </carModal>
    );
};

export default CarModal;