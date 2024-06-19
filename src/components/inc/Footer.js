import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Club Information</h6>
            <hr />
            <p className="text-white">
              This is a community of passionate students dedicated to exploring
              computer science and coding. We offer hands-on learning
              experiences, collaborative projects, and a supportive environment
              for all skill levels. Join us to innovate, learn, and connect with
              fellow tech enthusiasts!
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/">Contact</Link>
            </div>
            <div>
              <Link to="/">Blog</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">#64,Jaipur, Rajasthan India</p>
            </div>
            <div>
              <p className="text-white mb-1">+91 8888XXXXX8</p>
            </div>
            <div>
              <p className="text-white mb-1">+91 8888XXXXX8</p>
            </div>
            <div>
              <p className="text-white mb-1">email@domain.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
