import React from "react";
import clubwebsite from "../images/clubwebsite.jpeg";

function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{
        zIndex: "-100 !important",
        position: "relative",
      }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{ backgroundColor: "black" }}
        >
          <img
            className="d-block w-100"
            src={
              "https://cloud-i6gnfmcit-hack-club-bot.vercel.app/0hack_club_assemble_ltnj_02693-min.jpg"
            }
            style={{ maxHeight: "45rem", objectFit: "contain" }}
          />
          <div
            className="carousel-caption d-none d-md-block"
            src={clubwebsite}
            style={{ maxHeight: "45rem", objectFit: "contain" }}
          >
            <h5>Hackclub's Hackathon</h5>
            <p>Stay tuned for ByteBuilder's hackathon!!!</p>
          </div>
        </div>
        <div className="carousel-item" style={{ backgroundColor: "black" }}>
          <img
            className="d-block w-100"
            alt="..."
            src={
              "https://akshatsinghaniaweb.web.app/static/media/epoch.c03611f5dd54734e1893.jpg"
            }
            style={{ maxHeight: "45rem", objectFit: "contain" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Epoch in New Delhi</h5>
            <p>Can you find us?</p>
          </div>
        </div>
        <div className="carousel-item" style={{ backgroundColor: "black" }}>
          <img
            className="d-block w-100"
            alt="..."
            src={clubwebsite}
            style={{ maxHeight: "45rem", objectFit: "contain" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Computing Club</h5>
            <p></p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
