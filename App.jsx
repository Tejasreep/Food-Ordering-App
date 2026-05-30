import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/header/Header";
import RestaurantContainer from "./src/components/restaurant/restaurant-container";

const AppLayout = () => {
  return (
    <div id="app-layout">
      <Header />
      <RestaurantContainer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
