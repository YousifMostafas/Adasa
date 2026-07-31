import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/home/Home";
import About from "./components/About-us/About";
import Discover from "./components/Discover/Discover";
import SinglePost from "./components/SinglePost/SinglePost";
import NotFound from "./components/notFound/NotFound";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/terms/Terms";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/home", element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
        { path: "/discover", element: <Discover /> },
        { path: "/post/:id", element: <SinglePost /> },
        { path: "/privacy", element: <Privacy /> },
        { path: "/terms", element: <Terms /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
