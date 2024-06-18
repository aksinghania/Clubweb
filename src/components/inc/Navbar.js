import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-dark bg-dark shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <Link to="/" className="navbar-brand text-light">
                  Byte-Builders
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active text-light">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link active text-light">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/contact"
                        className="nav-link active text-light"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
