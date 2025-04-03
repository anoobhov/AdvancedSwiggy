import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Menu from "./Menu";

export default function RestaurantMenu()
{
    let {id} = useParams()
    // console.log(id)

    const [RestData,setRestData] =  useState([])

    useEffect(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json()
           setRestData(data)
        }
        fetchData()
    },[])
    console.log(RestData)

    // const menuItems=RestData.card.card
    // console.log(menuItems)
    return(
        
        <div className="w-[80%] mx-auto mt-20">
          {
            RestData.map((menuItems)=><Menu key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></Menu>)
          }
        </div>
        
    )
}