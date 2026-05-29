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
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
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
