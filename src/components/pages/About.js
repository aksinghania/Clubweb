import React from "react";
import Navbar from "../inc/Navbar";
import VMC from "./inc/Vmc";

function Aboutus() {
  return (
    <>
      <Navbar />
      <div>
        <section className="py-4 bg-info">
          <div className="container">
            <div className="row">
              <div className="col-md-4 my auto">
                <h4>About Us</h4>
              </div>
              <div className="col-md-8 my auto">
                <h6 className="float-end">Home / About Us</h6>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-light border-bottom">
          <div className="container">
            <h5 className="main-heading">Our Club</h5>
            <div className="underline"></div>
            <p>
              This is a dynamic community for students passionate about computer
              science and coding. We offer hands-on workshops, collaborative
              projects, and coding challenges, fostering innovation and learning
              in a supportive environment. Join us to connect, learn, and
              create!
            </p>
          </div>
        </section>

        <VMC />
      </div>
    </>
  );
}

export default Aboutus;
