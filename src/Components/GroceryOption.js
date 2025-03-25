import { GrocerGridCard } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption()
{
    return (
        <div className="mt-20 w-[80%] container mx-auto">
            <h1>Shop Groceries on instamart</h1>
            <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
                {
                    GrocerGridCard.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
                }
            </div>
        </div>
    )
}