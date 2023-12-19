import React from 'react';
import './App.css';
import Main from "./components/Main";
import Home from "./components/Home";
import Grid from "./assets/background-grid.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import TopNav from "./components/TopNav";


const routes = [
  {
    path: "/",
    element: <TopNav/>,
    errorElement: <TopNav/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "article/:article",
        element: <Main/>,
        errorElement: <ErrorPage/>,
      },
    ]
  },
]

const routerOptions = {
  basename: "/omninet",
}

const router = createBrowserRouter(routes, routerOptions);

function App() {
  return (
    <div
      className="App"
      style={{ background: `url(${Grid}`, animation: "scroll 600s linear infinite" }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
