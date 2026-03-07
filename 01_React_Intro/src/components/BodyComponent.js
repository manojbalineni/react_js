import RestroCard, { withPromotedLabel } from "./RestroCard";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import { RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyCmponent = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const RestroPromotedCard = withPromotedLabel(RestroCard);
  useEffect(() => {
    console.log("Use effect Called");
    const data = fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();
    const restautantList =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restautantList);
    setListOfRestaurant(restautantList);
    setFilteredRestaurant(restautantList);
  };
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  if (!onlineStatus) {
    return <h1>Your are offline. Please check the internet connection.</h1>;
  }

  if (listOfRestaurant.length === 0) {
    return <ShimmerComponent />;
  }
  return (
    <div className="body">
      <div className="filter-btn flex items-center">
        <div className="search-input m-4 p-4">
          <input
            type="text"
            className="border border-black"
            name=""
            id=""
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-300 m-4 rounded-sm cursor-pointer"
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
        <div>
          <button
            className="top-rated-btn px-4 py-2 bg-gray-100 rounded-lg flex items-center cursor-pointer"
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
      </div>
      <div className="restaurant-component flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="link-rest-component"
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <RestroPromotedCard resData={restaurant} />
            ) : (
              <RestroCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyCmponent;
