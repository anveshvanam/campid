import React, { lazy, useContext } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import DirectorLayout from "../layouts/directorLayout";
import About from "../views/about";
import Addtoexistingcamp from "../views/addtoexistingcamp";
import DirectorProfile from "../views/directorProfile";
import DirectorViewCamp from "../views/directorViewCamp";
import DirectorSearchCamp from "../views/directorSearchCamp";
import RegisteredMembers from "../views/registeredMembers";
import AthleteProfile from "../views/athleteProfile";
import AddAlbum from "../views/addAlbum";
import ParentGuardians from "../views/parentGuardians";
import AthleteViewCamp from "../views/athleteViewCamp";
import {UserContext} from "../store/UserContext";

const BlankLayout = lazy(() => import("../layouts/blankLayout"));
const LandingPage = lazy(() => import("../views/landingPage"));
const ParentAthleteSignUp = lazy(() => import("../views/parentAthleteSignUp"));
const CampDirectorSignup = lazy(() => import("../views/campDirectorSignup"));
const GeneratePassword = lazy(() => import("../views/generatePassword"));
const TermsAndConditions = lazy(() => import("../views/termsAndConditions"));
const Resources = lazy(() => import("../views/resources"));
const Camps = lazy(() => import("../views/camps"));
const ContactUs = lazy(() => import("../views/contactUs"));

const Login = lazy(() => import("../views/login"));
const SportsPage = lazy(() => import("../views/sportsPage"));
const PostCamps = lazy(() => import("../views/postCamp"));
const SearchResults = lazy(() => import("../views/searchResults/searchResults"));

export function AppRoutes() {
  const { user } = useContext(UserContext);

  const routes = useRoutes([
    {
      path: "/",
      element: <BlankLayout />,
      exact: true,
      children: [
        { path: "/", exact: true, element: <Navigate to="/home" /> },
        { path: "home", exact: true, element: <LandingPage /> },
        {
          path: "campdirectorsignup",
          exact: true,
          element: <CampDirectorSignup />,
        },
        {
          path: "generate-password/:email",
          exact: true,
          element: <GeneratePassword />,
        },
        {
          path: "termsandconditions",
          exact: true,
          element: <TermsAndConditions />,
        },
        {
          path: "parent-athlete-signup",
          exact: true,
          element: <ParentAthleteSignUp />,
        },
        {
          path: "login",
          exact: true,
          element: <Login />,
        },
        {
          path: "sports-page",
          exact: true,
          element: <SportsPage />,
        },
        {
          path: "about",
          exact: true,
          element: <About />,
        },
        {
          path: "resources",
          exact: true,
          element: <Resources />,
        },
        {
          path: "contactus",
          exact: true,
          element: <ContactUs />,
        },
        {
          path: "searchresults",
          exact: true,
          element: <SearchResults/>,
        },
        // { path: "/*", element: <Navigate to="/home" /> },
      ],
    },

    {
      path: "/director",
      element: <DirectorLayout />,
      exact: true,
      children: [
        {
          path: "camps",
          exact: true,
          element: <Camps />,
        },
        { path: "postcamps", exact: true, element: <PostCamps /> },
        { path: "directorprofile", exact: true, element: <DirectorProfile /> },

        { path: "searchcamp", exact: true, element: <DirectorSearchCamp /> },
        {
          path: "addtoexistingcamp",
          exact: true,
          element: <Addtoexistingcamp />,
        },
        { path: "viewcamp", exact: true, element: <DirectorViewCamp /> },
        {
          path: "registeredmembers",
          exact: true,
          element: <RegisteredMembers />,
        },
      ],
    },
    {
      path: "/athlete",
      element: <DirectorLayout />,
      exact: true,
      children: [
        {
          path: "camps",
          exact: true,
          element: <Camps isAthlete={user.accountType==='Athelet'} />,
        },
        { path: "athleteprofile", exact: true, element: <AthleteProfile /> },
        { path: "addalbum", exact: true, element: <AddAlbum /> },
        { path: "parentGuardians", exact: true, element: <ParentGuardians /> },

        { path: "postcamps", exact: true, element: <PostCamps /> },
        { path: "viewcamp", exact: true, element: <AthleteViewCamp /> },
        { path: "searchcamp", exact: true, element: <DirectorSearchCamp /> },
        {
          path: "addtoexistingcamp",
          exact: true,
          element: <Addtoexistingcamp />,
        },
        { path: "viewcamp", exact: true, element: <DirectorViewCamp /> },
        {
          path: "registeredmembers",
          exact: true,
          element: <RegisteredMembers />,
        },
      ],
    },
  ]);
  return routes;
}
