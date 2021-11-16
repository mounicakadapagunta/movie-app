import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";

export function MovieList({ movies, setMovies }) {
  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name,
        rating,
        summary,
        poster,
        director },
        index) => (
        <Movie name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          director={director}
          id={index}
          deleteButton={
            <IconButton
              onClick={() => {
                const deleteIdx = index;
                const remainingMovies = movies.filter(
                  (mv, idx) => idx !== deleteIdx);
                setMovies(remainingMovies);
              }}
              className="movie-show-button"
              color="error"
              aria-label="delete movie">
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            < IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => history.push("movies/edit/" + index)}
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

