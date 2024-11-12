import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/edu-vic-wa-nt-beginner";
import App from "./App.tsx";
import "./index.css";
import TrainingChessBoard from "./components/TrainingChessboard/TrainingChessboard.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";
import { AuthProvider } from "./context/authContext";
import Protected from "./protected";
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
import PawnsGame from "./components/PawnsGame/PawnsGame.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Protected />}>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path={routes.training} element={<TrainingChessBoard />} />
          <Route path={routes.fairPlay} element={<FairPlay />} />
          <Route path={routes.faq} element={<FAQ />} />
          <Route path={routes.aboutUs} element={<AboutUs />} />
          <Route path={routes.contactUs} element={<Contact />} />
          <Route path={routes.ourcouch} element={<OurCoach />} />
          <Route path={routes.courses} element={<CoursesPage />} />
          <Route path={routes.ranksAndBadges} element={<RanksAndBadges />} />
          <Route path={routes.privateLesson} element={<PrivateLesson />} />
          <Route path={routes.pawnsGame} element={<PawnsGame />} />
        </Route>
      </Route>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

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
