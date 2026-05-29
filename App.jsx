import React from "react";
import ReactDOM from "react-dom/client";

import { RestaurantList } from "./restaurant-list";

const Header = () => {
  return (
    <div id="header" className="header">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/731/268/original/modern-food-company-logo-design-template-home-made-food-logo-template-typographic-food-logo-design-creative-food-word-logo-design-cooking-typographic-design-vector.jpg"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items m-2">
        <ul className="d-flex p-4 m-2">
          <li>Home</li>
          <li>About US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div id="body">
      <div>Search bar</div>
      <div className="container">
        <div className="d-flex flex-wrap">
          <RestaurantList resta_name="Restaurant 1" cuisine="Indian" rating="4.5" />
          <RestaurantList resta_name="Restaurant 2" cuisine="continental" rating="3.5" />{
          <RestaurantList resta_name="Restaurant 3" cuisine="Italian" rating="4.0" />}
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

const AppLayout = () => {
  return (
    <div id="app-layout">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
