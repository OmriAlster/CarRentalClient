import { useLocalStorage } from "../UseLocalStorage";
import CarCard from "./CarCard";

import "./History.css"

const History = () => {
    const [history] = useLocalStorage("interest", [])

    return (
        <history className="history">
             {history.map((car, index) => (<CarCard key={index} car={car}/>))}
        </history>
    );
}

export default History;