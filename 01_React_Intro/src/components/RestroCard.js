import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="image-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt=""
      />
      <h3>{name}</h3>
      <h4>Rating : {avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export default RestroCard;
