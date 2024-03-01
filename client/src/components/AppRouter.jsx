import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes";
import { ShopRoute } from "../utils/consts";
import ShopPage from "../pages/shopPage";

const AppRouter = () => {
    return(
        <Routes>
            {publicRoutes.map(({path, Element}) => 
                <Route key={path} path={path} element={<Element />} exact/>
            )}
        </Routes>
    )
}
export default AppRouter;