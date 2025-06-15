
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";

const Itemlist = ({ items, dummy }) => {

  const dispatch = useDispatch();
const handleAddItem = (item) =>{
  // Dispatch an action 

  dispatch(addItem(item));

}
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-4 border-b border-gray-300 text-left flex justify-between items-start"
        >
          {/* Left Side - Info */}
          <div className="w-3/4 pr-4">
            <div className="mb-1">
              <span className="font-semibold text-gray-800 text-base">
                {item.card.info.name}
              </span>
              <span className="ml-3 text-green-600 font-medium">
                ₹{(item.card.info.price || item.card.info.defaultPrice || 0) / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500">{item.card.info.description}</p>
          </div>

          {/* Right Side - Image */}
            <div> 
               <button className="absolute  bg-black text-white border border-gray-300 px-3 py-1 rounded-3xl shadow hover:shadow-md" 
               onClick={() => handleAddItem(item)}>
                Add +
               </button> 
            </div>
          <div className="w-28 ">
           
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-24 object-cover rounded-md shadow-sm"
              />
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
