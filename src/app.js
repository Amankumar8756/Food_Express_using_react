import { lazy, Suspense, useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client"; 

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Carts from "./components/Cart.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import ErrorComponent from "./components/Error.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery.js")); // Lazy import

import UserContext from "./utils/UserContext.js";

import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";


const AppLayout = () => {

    const [userName, setUserName] = useState();
    
  useEffect(()=>{
// Make an API call and send username and password
    const data = {
        name: "Aman K",
      }
      setUserName(data.name);
  }, []);
 
 

    return (
        <Provider store={appStore}>
         <UserContext.Provider value={{loggedInUser: userName,  setUserName}}>
          <div className="app">
              <Header />
     
              <Outlet />
           
          </div>
         </UserContext.Provider>
        </Provider>
    );
};

// Routers
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />, 
        children: [
            { path: "/", element: <Body /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { 
                path: "/grocery", 
                element: (
                    <Suspense fallback={<h1>Loading Grocery...</h1>}>
                        <Grocery />
                    </Suspense>
                )
            },
            { path: "/cart", element: <Carts /> },
            
            { path: "/restaurants/:resId", element: <RestaurantMenu /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
