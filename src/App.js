import "./App.css";
import { useState } from "react";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import PropertyData from "./Components/PropertyData";

function App() {
  const [items, setItems] = useState(PropertyData);
    return (
        <>
            <Navbar />
            <Filter />
            <Cards items={items} />
        </>
    );
}

export default App;
