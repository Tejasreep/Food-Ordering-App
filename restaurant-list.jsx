import React from "react";
import ReactDOM from "react-dom/client";

export const RestaurantList = ({ resta_name, cuisine, rating }) => {
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
        <h2 className="card-title">{resta_name}</h2>
        <p className="card-cuisine">{cuisine}</p>
        <p className="card-rating">Rating: {rating}</p>
      </div>
    </div>
  );
};
