import React from "react";
import Navbar from "../inc/Navbar";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Slider />

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="main-heading">Our Club</h3>
                <div className="underline mx-auto"></div>
                <p>
                  Welcome to the Computer Science! Our goal is to provide a fun
                  and engaging environment to learn and practice coding, explore
                  computer science concepts, and work on exciting projects.
                </p>
                <Link to="/about" className="btn btn-warning shadow">
                  {" "}
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
