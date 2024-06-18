import React from "react";
import Navbar from "../inc/Navbar";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";
import Programe1 from "../images/programe1.png";

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

        <VMC />

        <section className="section border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">Our Programes</h3>
                <div className="underline mx-auto"></div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src={Programe1}
                    className="w-100 border-bottom"
                    alt="Programes"
                  />
                  <div className="card-body">
                    <h6>Programe1</h6>
                    <div className="underline"></div>
                    <p>
                      We aim to inspire innovation, foster collaboration, and
                      nurture technical skills in a supportive and inclusive
                      environment. We strive to empower members to become
                      forward-thinking tech leaders who make meaningful
                      contributions to the world.
                    </p>

                    <Link to="/Programes" className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src={Programe1}
                    className="w-100 border-bottom"
                    alt="Programes"
                  />
                  <div className="card-body">
                    <h6>Programe1</h6>
                    <div className="underline"></div>
                    <p>
                      We aim to inspire innovation, foster collaboration, and
                      nurture technical skills in a supportive and inclusive
                      environment. We strive to empower members to become
                      forward-thinking tech leaders who make meaningful
                      contributions to the world.
                    </p>

                    <Link to="/Programes" className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src={Programe1}
                    className="w-100 border-bottom"
                    alt="Programes"
                  />
                  <div className="card-body">
                    <h6>Programe1</h6>
                    <div className="underline"></div>
                    <p>
                      We aim to inspire innovation, foster collaboration, and
                      nurture technical skills in a supportive and inclusive
                      environment. We strive to empower members to become
                      forward-thinking tech leaders who make meaningful
                      contributions to the world.
                    </p>

                    <Link to="/Programes" className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
