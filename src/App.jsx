import React, { useState, useEffect } from "react";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import MainPage from "./pages/MainPage.jsx";
import ListingPage from "./pages/Listing.jsx";

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
