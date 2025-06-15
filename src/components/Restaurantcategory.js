import Itemlist from "./ItemList";


const RestaurantCategory = ({ category ,showItems, setShowIndex}) => {
  

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* header */}
      <div className="w-full mx-auto my-4 bg-gray-100 shadow-xl p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-xl">
            👉🏻 {category.title} ({category.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        {/* Accordion Body */}
        {showItems && <Itemlist items={category.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
