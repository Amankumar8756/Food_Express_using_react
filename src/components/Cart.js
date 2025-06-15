import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Carts = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    return (
        <section
            aria-labelledby="cart-heading"
            className="text-center m-4 p-4 bg-white shadow-md rounded-md"
        >
            <h2
                className="text-2xl font-bold text-gray-800 mb-4">
                Cart
            </h2>

            <div className="flex flex-col items-center w-6/12 m-auto">
               <button className="p-2 m-2 bg-orange-400 text-white rounded-lg"
               onClick={handleClearCart}
               > Clear Cart</button>
               {cartItems.length === 0 &&(
                 <h1> Cart  is empty Add Items to the cart</h1>)}
                <Itemlist items={cartItems} />
            </div>
        </section>
    );
};

export default Carts;
