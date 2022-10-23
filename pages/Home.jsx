import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="home-page-container">
        <h1>Home </h1>
        <Link to="/users">Check Users Page</Link>
      </div>
    </>
  );
}


