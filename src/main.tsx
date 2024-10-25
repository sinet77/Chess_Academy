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
import CoursesPage from "./components/Courses/CoursesPage.tsx";
import { routes } from "./routes.ts";
import OurCoach from "./components/OurCoach/OurCoachNavbar.tsx";
import PrivateLesson from "./PrivateLesson/PrivateLesson.tsx";
import { RanksAndBadges } from "./components/RanksAndBadges/RanksAndBadges.tsx";
import PuzzlesExercise from "./components/PuzzleExercise/PuzzleExercise.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: routes.home,
        element: <App />,
      },
      {
        path: routes.training,
        element: <TrainingChessBoard />,
      },
      {
        path: routes.fairPlay,
        element: <FairPlay />,
      },
      {
        path: routes.faq,
        element: <FAQ />,
      },
      {
        path: routes.aboutUs,
        element: <AboutUs />,
      },
      {
        path: routes.contactUs,
        element: <Contact />,
      },
      {
        path: routes.ourcoach,
        element: <OurCoach />,
      },
      {
        path: routes.courses,
        element: <CoursesPage />,
      },
      {
        path: routes.ranksAndBadges,
        element: <RanksAndBadges />,
      },
      {
        path: routes.privateLesson,
        element: <PrivateLesson />,
      },
      {
        path: routes.puzzles,
        element: <PuzzlesExercise />,
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
