import { useState, useEffect } from "react";
import "./Filter.css"
import Select from "react-select"
import {dayAfter, dayString, Today, Tomorrow} from "../Dates";

const Filter = ({gear,years, price, dates}) => {
    const options = [
        {value:"הכל", label:"הכל"},
        {value:"אוטומטי", label:"אוטומטי"},
        {value:"ידני", label:"ידני"}
    ]

    const a = () => {
        if (Date.parse(Tomorrow()) < Date.parse(dates.get.start))
            return dayAfter(dates.get.start);
        return Tomorrow();
    }

    return (
        <filter className="filter-a">
            <div className="a">
                <label>.</label>
                <label>התחלה</label>
                <label>סוף</label>
            </div>
            <div className="a">
            <label>תאריכים</label>
                <input type='date' min={Today()} max={dates.get.end} value={dates.get.start} onChange={(e) => dates.set({start:e.target.value, end:dates.get.end})}/>
                <input type='date' min={a()} value={dates.get.end}  onChange={(e) => dates.set({start:dates.get.start, end:e.target.value})}/>
            </div>
            <div className="a">
                <label>שנה</label>
                <input min="1999" max="2022" max={years.get.end} type='number' value={years.get.start} onChange={(e) => years.set({start:e.target.value, end:years.get.end})}/>
                <input min="1999" max="2022"  min={years.get.start} type='number' value={years.get.end} onChange={(e) => years.set({start:years.get.start, end:e.target.value})}/>
            </div>
            <div className="a">
                <label>מחיר</label>
                <input type='number' min="0" max={price.get.end} value={price.get.start} onChange={(e) => price.set({start:e.target.value, end:price.get.end})}/>
                <input type='number' min={price.get.start} value={price.get.end} onChange={(e) => price.set({start:price.get.start, end:e.target.value})}/>
            </div>
            <div className="a">
                <label>גיר</label>
                <Select options={options} onChange={(value) => gear.set(value.value)} value={options.find(op => op.value === gear.get)}></Select>
            </div>
        </filter>
    )
}

export default Filter;