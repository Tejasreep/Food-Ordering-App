import {FETCH_MENU_URL} from "../../common/constants";

const RestaurantList = ({ resta_name, cuisine, rating }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <img
          src={FETCH_MENU_URL}
          height="250"
          width="250"
          alt="restaurant"
          className="card-image"
        />
        <h2 className="card-title">{resta_name}</h2>
        <p className="card-cuisine">{cuisine}</p>
        <p className="card-rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default RestaurantList;