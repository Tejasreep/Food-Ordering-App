import {IMG_CDN_URL} from "../../common/constants";

const Header = () => {
  return (
    <div id="header" className="header">
      <div>
        <img
          src={IMG_CDN_URL}
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

export default Header;