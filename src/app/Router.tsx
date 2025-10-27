import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import ProductList from "@/pages/products/OffersPage";
import ProductDetailPage from "@/pages/products/ProductDetailPage";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: ROUTES.OFFERS, element: <ProductList /> },
            { path: ROUTES.PRODUCT_DETAIL(), element: <ProductDetailPage /> },
        ],
    },
]);
