import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-4 p-4 w-62.5 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="image-logo rounded-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>Rating : {avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black m-2 p-2 text-white rounded-lg">
          Promoted
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
