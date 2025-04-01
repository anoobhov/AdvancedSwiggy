import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurants";
import RestaurantMenu from "./Components/Restaurantsmenu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant" element={<Restaurant/>} />
                <Route path="/city/delhi/:id" element={<RestaurantMenu />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
