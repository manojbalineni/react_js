import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

const BodyCmponent = () => {
  return (
    <div className="body">
      <div className="search-input">Search Box</div>

      <div className="restaurant-component">
        {resList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyCmponent;
