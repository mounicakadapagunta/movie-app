import { useState } from "react";
import { Counter } from "./Counter";

export function Movie({ name, rating, summary, poster, director }) {
  const [show, setShow] = useState(true);
  //conditional styling
  const styles = {
    color: rating < 8 ? "crimson" : " green",
    fontWeight: "bold",
  };
  //conditional styling
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <div className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating" style={styles}>⭐ {rating}/10</p>
      </div>
      <button onClick={() => setShow(!show)} className="movie-show-button">
        {show ? "Hide" : "Show"} Description
      </button>
      {/* conditional rendering */}
      {show ? <p className="movie-summary">{summary}</p> : " "}

      <h3 className="movie-director"> Director: {director}</h3>

      <Counter />
    </div>
  );
}
