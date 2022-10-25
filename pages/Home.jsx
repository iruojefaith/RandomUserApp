import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
    <div className="home-page-layout">

        <div className="home-page-container-one">
              <div className="span"></div>
          </div>
          <div className="home-page-container">
                <span>Hi there, </span>
                <p className="paragraph">This website consume a third party api to generate random multiple users, click the button below to check</p>
                <Link to="/users"><button>View Users Page</button></Link>
          </div>
          <div className="home-page-container-two">

          </div>
    </div>

    </>
  );
}


