import { LOGO_CDN_URL } from "../utils/constants";
const RestaurantCard = ({restaurantData}) => {
    const {
        name,
        cuisines,
        avgRatingString,
        sla,
        cloudinaryImageId
    } = restaurantData?.info;
    const { slaString } = sla?.slaString;
    return (
        <div className="res-card">
            <img 
              className="res-logo" 
              alt="res-logo"
              src={LOGO_CDN_URL + cloudinaryImageId}
            />
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRatingString} stars</h4>
              <h4>{slaString} mins</h4>
        </div>
    )
}

export default RestaurantCard;