import RestaurantCard from "./RestaurantCard";
import {resData} from "../utils/constants";
import {useState} from "react";

const Body = () => {
    console.log(resData);
    const [resList, setResList] = useState(resData);
    return (
        <div className="body">
            <button type="button" onClick={() => {
                 setResList(()=> {
                    return resData.filter((restaurant) => restaurant.info.avgRating > 4)
                 })
            }}>Top Rated Restaurants</button>
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map((resdata)=>(
                        <RestaurantCard key={self.crypto.randomUUID()} restaurantData={resdata}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;