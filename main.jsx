import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import App from "./pages/Home";
import Users from "./pages/users";
import User from "./pages/users/user";
import ErrorPage from "./pages/Error";
import ThemeContextWrapper from './Darkmode/themeContextWrapper';
// CSS
import "./style/index.css";

const RandomUserAPI = "https://randomuser.me/api/?results=50";

const IndexPage = () => {
  const [apiResult, setApiResult] = useState([]);

  useEffect(() => {
    FetchAPIFromServer();
  }, []);

  const router = createBrowserRouter([
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/users",
      element: <Users apiResult={apiResult} />,
    },
    {
      path: "/users/:id",
      element: <User apiResult={apiResult} />,
    },
  ]);

  const FetchAPIFromServer = async () => {
    const response = await fetch(RandomUserAPI);
    const result = await response.json();
    setApiResult(result.results);
  };

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
   <ThemeContextWrapper>
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>
  </ThemeContextWrapper>
);
