import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuComponent = () => {
  const params = useParams();
  const { resId } = params;
  const menuList = useRestaurantMenu(resId);
  if (menuList === null) {
    return <ShimmerComponent />;
  }

  const { name, avgRating, costForTwo, cuisines } =
    menuList?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuList.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards[0].card.info.name);

  return (
    <div className="restaurant">
      <h1>{name}</h1>
      <h3>Rating : {avgRating}</h3>
      <h3>cost for two people : {costForTwo}</h3>
      <h3>Cuisines : {cuisines.join(",")}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenuComponent;
