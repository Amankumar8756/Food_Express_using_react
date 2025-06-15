import { useState } from "react";
import { useEffect } from "react";

const useOnlineStatus = () =>{
 
    const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(()=>{
 // chieck if online 
   // boolean value
   window. addEventListener("offline", (event) => {
    setonlineStatus(false);
   });
  

   window. addEventListener("online", (event) => {
    setonlineStatus(true);
   });
   


   },[]);

    return onlineStatus;
}

export default useOnlineStatus;