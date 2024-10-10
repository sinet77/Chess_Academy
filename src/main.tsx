import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/edu-vic-wa-nt-beginner";
import App from "./App.tsx";
import "./index.css";
import TrainingChessBoard from "./components/TrainingChessboard/TrainingChessboard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";
import { AuthProvider } from "./context/authContext";

import Error404 from "./components/Error404/Error404.tsx";
import FairPlay from "./components/Footer/FairPlay/FairPlayStartingPage.tsx";
import FAQ from "./components/Footer/FAQ/FAQ.tsx";
import AboutUs from "./components/Footer/AboutUs/AboutUs.tsx";
import Contact from "./components/Footer/Contact.tsx/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/training",
        element: <TrainingChessBoard />,
      },
      {
        path: "/fair-play",
        element: <FairPlay />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },

  { path: "*", element: <Error404 /> },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );
}
