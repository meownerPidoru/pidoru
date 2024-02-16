import React from "react"; 
import { Route, Routs } from "react-router-dom"; 
import { publicRoutes } from "../routs"; 
 
const AppRouter = () => { 
    return( 
        <Routes> 
        {publicRoutes.map(({path, Element}) => 
            <Route key={path} path={path} element={<Element/>} exact/> 
        )} 
    </Routes> 
); 
}