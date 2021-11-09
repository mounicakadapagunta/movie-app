import { useState } from "react";
import{Counter} from "./Counter"
export function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster }) => (
        <Movie name={name} ratting={rating} summary={summary} poster={poster} />
      ))}
    </section>
  );
}
function Movie({ name, rating, summary, poster }) {
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
        <p className="movie-rating" style={styles}>⭐{rating}</p>
      </div>
      <button onClick={() => setShow(!show)} className="movie-show-button">
        {show ? "Hide" : "Show"} Description
      </button>
      {/* conditional rendering */}
      {show ? <p className="movie-summary">{summary}</p> : " "}
      <Counter />
    </div>
  );
}
