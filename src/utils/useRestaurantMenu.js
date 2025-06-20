import { useEffect, useState } from "react";
import { MENU_ITEM } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    const data = await fetch(MENU_ITEM + resId);
    const json = await data.json();
    setResInfo(json?.data || null); 
  };

  console.log("resInfo:", resInfo); 
  return resInfo;
};

export default useRestaurantMenu;
