import React from "react";
import "./styles/nofo.css";
import ninjaImage from "./ninja.png"; // Adjust the path as per your directory structure
import NAVBAR from "./MP/navbar";
// Import the CSS file

const NotFound = () => {
  return (
    <>
      <NAVBAR />
      <div className="not-found">
        <div className="not-found-content">
          <img src={ninjaImage} className="ninja-image" alt="Cute Ninja" />

          <h1 className="title">404</h1>
          <h2 className="subtitle">Oops! Page Not Found</h2>
          <p className="description">
            It seems you've stumbled upon a secret ninja hideout! Let's get you
            back home.
          </p>
          <a href="/" className="home-button">
            Go to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
