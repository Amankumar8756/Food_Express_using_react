import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./Restaurantcategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); 
  const resInfo = useRestaurantMenu(resId); 

  const [showindex , setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  // Extract restaurant details
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info || {};

 
    
      const groupedCard = resInfo?.cards?.find((card) => card?.groupedCard);

const categories = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  (c) =>
    c?.card?.card?.["@type"] ==
 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
) || [];

console.log(categories)

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Restaurant Info */}
      <div className="bg-amber-200 p-4 rounded shadow">
        <h1 className="text-2xl font-bold flex justify-center "> ✅ {name || "Restaurant Name"}</h1>
        <p className="text-gray-800 flex justify-center">{cuisines?.join(", ") || "Cuisines Not Available"}</p>
        <p className="text-gray-800 flex justify-center">{costForTwoMessage || "Price Not Available"}</p>
      </div>

      {/* Menu List */}
      <div className="bg-amber-100 mt-4 p-4 rounded shadow">
        <h2 className="text-2xl font-bold  flex justify-center">Menu</h2>
       
         {/* catogroies accordiaons */}

         {categories.map((category , index) => (
       <RestaurantCategory key={category?.card?.card.title} 
         category={category?.card?.card}
         showItems ={index == showindex ? true : false}
         setShowIndex ={() => setShowIndex(index)}
         />
       
   ))}

      </div>
    </div>
  );
};

export default RestaurantMenu;
