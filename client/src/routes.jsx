import {ShopRoute, HomeRoute, RegisterRoute, AuthRoute} from "./utils/consts" // добавляем маршрут
import ShopPage from "./pages/shopPage" // добавляем страницу
import HomePage from "./pages/homePage";
import RegisterPage from "./pages/registerPage";
import AuthPage from "./pages/authPage";

export const publicRoutes = [
    {
        path: ShopRoute,
        Element: ShopPage
    },
    {
        path: HomeRoute,
        Element: HomePage
    },
    {
        path: RegisterRoute,
        Element: RegisterPage
    },
    {
        path: AuthRoute,
        Element: AuthPage
    },
];
