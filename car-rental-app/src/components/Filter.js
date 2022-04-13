import { useState, useEffect } from "react";
import "./Filter.css"
import Select from "react-select"

const Filter = ({years, price, dates}) => {
    const dayString = (day) => {
        return new Date(day).toISOString().substr(0, 10);
      }

   // const [dates, setDates] = useState({start:undefined,end:undefined})
    //const [years, setYears] = useState({start:1999,end:2022})
  //  const [price, setPrice] = useState({start:undefined,end:undefined})
    const options = [
        {value:"אוטומטי", label:"אוטומטי"},
        {value:"ידני", label:"ידני"}
    ]

    return (
        <filter className="filter-a">
            <div className="a">
                <label>.</label>
                <label>התחלה</label>
                <label>סוף</label>
            </div>
            <div className="a">
            <label>תאריכים</label>
                <input type='date' value={dates.get.start} onChange={(e) => dates.set({start:e.target.value, end:dates.get.end})}/>
                <input type='date' value={dates.get.end}  onChange={(e) => dates.set({start:dates.get.start, end:e.target.value})}/>
            </div>
            <div className="a">
                <label>שנה</label>
                <input min="1999" max="2022" type='number' value={years.get.start} onChange={(e) => years.set({start:e.target.value, end:years.get.end})}/>
                <input min="1999" max="2022" type='number' value={years.get.end} onChange={(e) => years.set({start:years.get.start, end:e.target.value})}/>
            </div>
            <div className="a">
                <label>מחיר</label>
                <input type='number' min="0" value={price.get.start} onChange={(e) => price.set({start:e.target.value, end:price.get.end})}/>
                <input type='number' min="0" value={price.get.end} onChange={(e) => price.set({start:price.get.start, end:e.target.value})}/>
            </div>
            <div className="a">
                <label>גיר</label>
                <Select options={options} defaultValue={options[0]}></Select>
            </div>
        </filter>
    )
}

export default Filter;