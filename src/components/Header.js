import { LOGO_URL } from "../utils/constants";
import { useState,createContext, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
 console.log(loggedInUser)
 
 //subscribing to the store using a Selector
 const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 shadow-lg sm:bg-amber-50 sticky top-0 z-10 bg-white">
      {/* Logo Section */}
      <div className="flex items-center mb-4 sm:mb-0">
        <img className="w-14 h-16 object-contain" src={LOGO_URL} alt="Logo" />
        <span className="ml-2 text-xl font-semibold text-gray-700">
          Food Express
        </span>
      </div>
   
      {/* Nav Links */}
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-gray-700 text-lg font-medium">
          <li>Online: {onlineStatus ? "🟢" : "🚫"}</li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-500 transition duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-500 transition duration-100"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="hover:text-orange-500 transition duration-200"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-orange-500 transition duration-200"
            >
              {cartItems.length} 🛒
            </Link>
          </li>
          <li>
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200"
              onClick={() =>
                setBtnName(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
