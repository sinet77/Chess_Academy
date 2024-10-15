import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TrainingChessBoard from "./components/TrainingChessboard/TrainingChessboard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.tsx";

import Error404 from "./components/Error404/Error404.tsx";
import FairPlay from "./components/Footer/FairPlay/FairPlayStartingPage.tsx";
import FAQ from "./components/Footer/FAQ/FAQ.tsx";
import AboutUs from "./components/Footer/AboutUs/AboutUs.tsx";
import Contact from "./components/Footer/Contact.tsx/Contact.tsx";
import OurCoach from "./components/OurCoach/OurCoachNavbar.tsx";

const router = createBrowserRouter([
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
      {
        path: "/ourcoach",
        element: <OurCoach />,
      },
    ],
  },

  { path: "*", element: <Error404 /> },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
