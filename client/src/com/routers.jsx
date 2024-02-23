import { ShopRoute, HomeRoute, RegisterRoute, AuthRoute } from "../utils/const";
import ShopPage from "./ShopPage";
import HomePage from "./HomePage";
import AuthPage from "./AuthPage";
import RegisterPage from "./RegisterPage";
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
        path: AuthRoute,
        Element: AuthPage
    },
    {
        path: RegisterRoute,
        Element: RegisterPage
    },
]
