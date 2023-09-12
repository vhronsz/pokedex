import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import Testing from "./pages/Homepage/testing";

function Router(){
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Homepage/>,
        },
        {
            path:"pokedex",
            element:<Pokedex/>
        }
    ]);
    return (
        <RouterProvider router={router}/>
    );
}

export default Router;