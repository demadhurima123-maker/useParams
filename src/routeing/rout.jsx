import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/layout";

const Home = lazy(() => import("../pages/home/page"));
const Products = lazy(() => import("../pages/products/page"));
const Details = lazy(() => import("../pages/details/page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "details/:id", element: <Details /> },
    ],
  },
]);

const Routeing = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Routeing;
