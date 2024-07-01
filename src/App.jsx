import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import {Abu, Bilol, Far, Ismoil, Login, Lut, Maryam, Saf, SingUp, Umar,} from "./routes/routes";

const App = () => {
  // Translation

  // import { useTranslation } from 'react-i18next';

  // const {t, i18n} = useTranslation();
  // function TranslateClick(lang) {
  //     i18n.changeLanguage(lang);
  // }

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <Bilol />
            </Suspense>
          ),
        },

        {
          path: "/abubakr",
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <Abu />
            </Suspense>
          ),
        },

        {
          path: "/faruh",
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <Far />
            </Suspense>
          ),
        },

        {
          path: "/ismoil",
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <Ismoil />
            </Suspense>
          ),
        },

        {
          path: "/lutfullo",
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <Lut />
            </Suspense>
          ),
        },

        {
          path: "/maryam",
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <Maryam />
            </Suspense>
          ),
        },

        {
          path: "/safialloh",
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <Saf />
            </Suspense>
          ),
        },

        {
          path: "/umar",
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <Umar />
            </Suspense>
          ),
        },

        {
          path: "/login",
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <Login />
            </Suspense>
          ),
        },

        {
          path: "/connect",
          element: (
            <Suspense
              fallback={
                <span class="loader"></span>
              }
            >
              <SingUp />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
