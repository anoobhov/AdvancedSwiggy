import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Fooddetails from "./Components/Fooddetails"
import { Component } from "lucide-react";

function App()
{
    return(
        <>
<Header/>
<Fooddetails></Fooddetails>
</>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);