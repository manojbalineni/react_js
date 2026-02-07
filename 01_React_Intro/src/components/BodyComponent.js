import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState } from "react";

const BodyCmponent = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredRestaurants = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setListOfRestaurant(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-component">
        {listOfRestaurant.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyCmponent;
