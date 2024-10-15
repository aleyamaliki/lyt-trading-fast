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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SwapInDialog from "./components/Dialog/SwapIn.jsx";

const queryClient = new QueryClient()
import Home from "./pages/Home.jsx";
import Earn from "./pages/Earn.jsx";
import WalletProfile from "./pages/WalletProfile.jsx";
import Token from "./pages/Token.jsx";

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
          path: "/home",
          element: <Home />
        },
        {
          path: "/earn",
          element: <Earn />
        },
        {
          path: "/tokens",
          element: <ListingPage />,
        },
        {
          path: "/token/:id",
          element: <Token />,
        },
        {
          path: "/walletprofile",
          element: <WalletProfile />,
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
