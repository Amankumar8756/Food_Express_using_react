import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, totalRatingsString, costForTwo } = resData.info;

  
 const {loggedInUser} = useContext(UserContext)

  return (
    <div className=" rounded-lg  hover:shadow-lg transition-all duration-100 w-[280px]   p-4 hover:bg-gray-300 ">
      
      <img 
        className="w-full h-44 rounded-lg object-cover" 
        alt="Restaurant Logo" 
        src={CDN_URL + cloudinaryImageId} 
      />

      
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-1000 truncate">{name}</h3>
        <h4 className="text-gray-600 text-sm truncate">{cuisines?.join(", ")}</h4>

        
        <div className="flex items-center space-x-2 mt-1">
          <span className="bg-green-600 text-white px-2 py-1 rounded-md text-xs font-medium">
            {avgRating} 
          </span>
          <span className="text-gray-500 text-xs">{totalRatingsString} reviews</span>
        </div>

        
        <h4 className="text-sm text-gray-700 mt-1">{costForTwo}</h4>
        <h4 className="text-xs text-gray-500">{areaName}</h4>
        <h4 className="text-xs text-gray-600">User : {loggedInUser}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
