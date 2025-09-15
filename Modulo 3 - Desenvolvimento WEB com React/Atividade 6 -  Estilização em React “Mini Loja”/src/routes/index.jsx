import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeTailwind from "../pages/TailwindPages/HomeTailwind";
import ProductInfo from "../pages/CssModulesPages/ProductInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomeTailwind /> },
      { path: "/product/:id", element: <ProductInfo /> },
    ],
  },
]);
