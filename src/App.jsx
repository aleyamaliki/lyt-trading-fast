import React, { useState, useEffect } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import MainPage from "./pages/MainPage.jsx";
import ListingPage from "./pages/Listing.jsx";
import TestComponents from "./pages/testComponets.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SwapInDialog from "./components/Dialog/SwapIn.jsx";

const queryClient = new QueryClient()

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/tokens",
          element: <ListingPage />,
        },
        {
          path: "/testComponents",
          element: <TestComponents />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <SwapInDialog />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
};

export default App;
