import RestaurantList from "./Restaurant-List";

const RestaurantContainer = () => {
  return (
    <div id="body">
      <div>Search bar</div>
      <div className="container">
        <div className="d-flex flex-wrap">
          <RestaurantList resta_name="Restaurant 1" cuisine="Indian" rating="4.5" />
          <RestaurantList resta_name="Restaurant 2" cuisine="continental" rating="3.5" />
          <RestaurantList resta_name="Restaurant 3" cuisine="Italian" rating="4.0" />
          <RestaurantList resta_name="Restaurant 4" cuisine="Mexican" rating="4.2" />
          <RestaurantList resta_name="Restaurant 5" cuisine="Japanese" rating="4.7" />
          <RestaurantList resta_name="Restaurant 6" cuisine="Thai" rating="4.1" />
          <RestaurantList resta_name="Restaurant 7" cuisine="French" rating="4.6" />
          <RestaurantList resta_name="Restaurant 8" cuisine="Greek" rating="4.3" />
          <RestaurantList resta_name="Restaurant 9" cuisine="Indian" rating="4.8" />
          <RestaurantList resta_name="Restaurant 10" cuisine="Italian" rating="4.4" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantContainer;