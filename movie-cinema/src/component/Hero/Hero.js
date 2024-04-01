import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="">
      <div className="container">
        <section className="hero">
          <div className="hero-left">
            <h1 className="hero-title">Hallo Haikal </h1>
            <h3 className="hero-genre">Genre :</h3>
            <p className="hero-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              nam expedita aliquid tempora eligendi unde similique aut magni in
              rem reiciendis commodi eius vitae hic nobis sint est placeat.
              Iusto.
            </p>
            <p className="hero-button">Wacth</p>
          </div>
          <div class="hero-right">
            <img
              src="https://picsum.photos/200/300"
              alt="hero-img"
              className="hero-image"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
