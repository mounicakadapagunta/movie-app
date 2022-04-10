import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react"

const API_URL = "https://movie-backendnode.herokuapp.com"
// const API_URL = "https://6166c53d13aa1d00170a6764.mockapi.io/movies" 

export function MovieList() {

  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch(`${API_URL}/movies`)
      .then(data => data.json())
      .then((mvs) => setMovies(mvs));
  }
  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch(`${API_URL}/movies/${id}`,
      {
        method: "DELETE",
      })
      .then(() => getMovies());
  };
  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({
        name,
        rating,
        summary,
        poster,
        director,
        id,
        _id }) => (
        <Movie
          key={id}
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          director={director}
          id={_id}
          deleteButton={
            <IconButton
              onClick={() => deleteMovie(_id)}
              className="movie-show-button"
              color="error"
              aria-label="delete movie">
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            < IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => history.push("movies/edit/" + _id)}
              className="movie-show-button"
              color="secondary"
              aria-label="more-info">
              <EditIcon />
            </IconButton >
          }
        />
      ))}
    </section >
  );
}

