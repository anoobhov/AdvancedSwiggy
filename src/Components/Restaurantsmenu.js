import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Menu from "./Menu";

export default function RestaurantMenu()
{
    let {id} = useParams()
    // console.log(id)

    const [RestData,setRestData] =  useState([])
    const [selected,setSelected] = useState(null)

    useEffect(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
           setRestData(filterData);
        }
        fetchData()
    },[])
    console.log(RestData)

    // const menuItems=RestData.card.card
    // console.log(menuItems)
    return(
        

      <div>

      <div className="w-[80%] mx-auto mt-20 mb-20">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</p>
        </Link>
      </div>

      <div className="w-[80%] mx-auto mt-20 mb-20">
        <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==='veg'?"bg-green-300":"bg-gray-200"}`} onClick={()=>setSelected(selected==='veg'?null:"veg")}>Veg</button>
        <button className={`text-2xl py-2 px-8 border rounded-2xl ${selected==='nonveg'?"bg-red-300":"bg-gray-200"}`} onClick={()=>setSelected(selected==='nonveg'?null:"nonveg")}>Non-Veg</button>
      </div>
      
        <div className="w-[80%] mx-auto mt-20">
          {
            RestData.map((menuItems)=><Menu key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></Menu>)
          }
        </div>
      </div>
        
    )
}