import { useContext } from "react";
import UserContext from "../utils/UserContext";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
  const [listRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.422411&lng=81.7708675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    const restaurants =
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  if (!onlineStatus) {
    return <h1 className="">⚠️ You are offline! Please check your internet connection.</h1>;
  } 


  const { loggedInUser, setUserName } = useContext(UserContext);
  
  if (listRestaurants.length === 0) {
    return <Shimmer />;
  }

 


  return (
    <div className="p-6 ">
      {/* 🔍 Search & Filter Section */}
      <div className="m-4 p-4  flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex space-x-2  ">
          <input
            type="text"
            className=" border border-gray-300 p-2 rounded-md focus:ring focus:ring-orange-400"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" font-bold bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            onClick={() => {
              const searchedRestaurants = listRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>

        {/* ⭐ Top Rated Button */}
        <div className="m-4 px-4" >
        <button
          className="  border bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-2 md:mt-0"
           onClick={() => {
            const topRatedRestaurants = listRestaurants.filter((res) => res?.info?.avgRating > 4.0);
            setFilteredRestaurant(topRatedRestaurants);
           }}
          >
          Top Rated Restaurants ⭐
         </button>
         
        </div>
        <div className="  border bg-orange-100 text-black px-4 py-2 rounded-md mt-2 md:mt-0">
         <label> UserName : </label>
         <input className="border-black p-2"
          value={loggedInUser}
           onChange={(e)=>setUserName(e.target.value)}/>
        </div>
       
      </div>

      {/* Restaurant Card Container with Flex & Proper Gap */}
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
