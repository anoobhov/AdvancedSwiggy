import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Fooddetails from "./Components/Fooddetails"
import GroceryOption from "./Components/GroceryOption";

function App()
{
    return(
        <>
<Header/>
<Fooddetails></Fooddetails>
<GroceryOption></GroceryOption>
</>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);