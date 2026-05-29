import React from "react";
import ReactDOM from "react-dom/client";

export const RestaurantList = () => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <img
          src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
          height="250"
          width="250"
          alt="restaurant"
          className="card-image"
        />
        <h2 className="card-title">Restaurant Name</h2>
        <p className="card-cuisine">Cuisine Type</p>
        <p className="card-rating">Rating: 4.5</p>
      </div>
    </div>
  );
};
