import React, { useState } from "react";
import "./AddMovieForm.css";

const AddMovieForm = ({ onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    poster: "",
    genre: "",
  });

  const handleChange  = (e) => {
    const {name, value } = e.target;
    setFormData({
        ...formData,
        [name] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(formData);
  };

  return (
    <div className="container">
      <section className="form">
        <div className="form-left">
          <img
            src="http://picsum.photos/200/300"
            alt=""
            className="form-image"
          />
        </div>

        <div className="form-right">
          <h1 className="form-title">Add Movie</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-inputgroup">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="text"
                name="year"
                id="year"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <select
                name="genre"
                id="genre"
                className="form-input"
                onChange={handleChange}
              >
                <option hidden></option>
                <option value="action">Action</option>
                <option value="horror">Horror</option>
                <option value="drama">Drama</option>
                <option value="comedy">Comedy</option>
                <option value="romance">Romance</option>
              </select>
            </div>
            <div className="form-inputgroup">
              <label htmlFor="poster" className="form-label">
                Image
              </label>
              <input
                type="text"
                name="poster"
                id="poster"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
