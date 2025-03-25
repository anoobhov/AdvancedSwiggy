import { imageGridCards } from "../Utils/Fooddetail";
import FoodCard from "./FoodCard";

export default function FoodOption()
{
    return(
        <>
            <div className="flex flex-wrap w-[80%] container mx-auto gap-3">
                {
                    imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
                }
            </div>
        </>
    )
}