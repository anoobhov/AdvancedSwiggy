import { Link } from "react-router";

export default function RestHeader()
{
    return(
        <div className="container w-[80%] mx-auto py-4 px-8 bg-gray-200 text-2xl flex justify-between items-center">
            <div>
                <p className="text-orange-400 font-bold">Swiggy</p>
            </div>

            <div>
                <Link to="/Checkout">
                <p>Cart ${`(${counter})`}</p>
                </Link>
            </div>
        </div>
    )
}