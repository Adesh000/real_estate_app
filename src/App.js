import "./App.css";
import { useState } from "react";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import PropertyData from "./Components/PropertyData";

function App() {
    const [items, setItems] = useState(PropertyData);
    const requiredCards = (recievedData) => {
        console.log(recievedData);
        // let filteredData = PropertyData.filter(element => {
        //     return element.price >= recievedData.propertyPrice;
        // })



        // I am leaving this projects here because my laptop is not working properly
        

        setItems(filteredData)
    };
    return (
        <>
            <Navbar />
            <Filter requiredCards={requiredCards} />
            <Cards items={items} />
        </>
    );
}

export default App;
