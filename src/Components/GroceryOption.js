import { GrocerGridCard } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption()
{
    return (
        <div className="w-[80%] container mx-auto mt-20">
            <h1>Shop Groceries on instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                {
                    GrocerGridCard.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
                }
            </div>
        </div>
    )
}