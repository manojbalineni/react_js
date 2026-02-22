import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import { RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyCmponent = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);
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
          <Link
            className="link-rest-component"
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyCmponent;
