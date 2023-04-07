import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from '../home'

const RoutesSite = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element={ <Home/> }  path="/" />
            </Routes>
       </BrowserRouter>
   )
}

export default RoutesSite;