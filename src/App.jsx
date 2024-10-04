import React, { useState, useEffect } from "react";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import MainPage from "./pages/MainPage.jsx";
import ListingPage from "./pages/Listing.jsx";
import Home from "./pages/Home.jsx";
import Earn from "./pages/Earn.jsx";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <MainPage />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/earn",
          element: <Earn />
        },
        {
          path: "/tokens",
          element: <ListingPage />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
