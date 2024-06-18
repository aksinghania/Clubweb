import React from "react";
import Navbar from "../inc/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <h2>Home Page</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
