import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from '../home'
import Drink from '../home/drink'
import Error from '../Error'

const RoutesSite = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element={ <Home/> }  path="/" />
                <Route element={ <Drink/> }  path="/bebidas" />
                <Route element={<Error/>} path="*"/>
            </Routes>
       </BrowserRouter>
   )
}

export default RoutesSite;