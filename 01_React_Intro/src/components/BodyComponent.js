import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";

const BodyCmponent = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    console.log("Use effect Called");
    const data = fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const restautantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restautantList);
    setListOfRestaurant(restautantList);
    setFilteredRestaurant(restautantList);
  };

  if (listOfRestaurant.length === 0) {
    return <ShimmerComponent />;
  }
  return (
    <div className="body">
      <div className="filter-btn">
        <div className="search-input">
          <input
            type="text"
            name=""
            id=""
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestro = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText),
              );
              setFilteredRestaurant(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurant(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-component">
        {filteredRestaurant.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyCmponent;
