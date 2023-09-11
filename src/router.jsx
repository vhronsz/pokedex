import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Master from "./pages/Master";

function Router(){
    const router = createBrowserRouter([{
        path:"/",
        element: <Master/>,
        children:[
            {
                path:"/pokédex",
                element:<Master/>
            }
        ]
    }]);
    return (
        <RouterProvider router={router}/>
    );
}

export default Router;