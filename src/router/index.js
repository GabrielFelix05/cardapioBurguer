import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from '../home'
import Error from '../Error'

const RoutesSite = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element={ <Home/> }  path="/" />
                <Route element={<Error/>} path="*"/>
            </Routes>
       </BrowserRouter>
   )
}

export default RoutesSite;