import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react"

export function MovieDetails() {
    const history = useHistory();
    const { id } = useParams();
    console.log(id)
    // const movie = movies[id];
    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetch(`https://6166c53d13aa1d00170a6764.mockapi.io/movies/${id}`,
            {
                method: "GET",
            })
            .then(data => data.json())
            .then((mv) => setMovie(mv));

    },[id])
    // console.log(movie);
    const styles = {
        color: movie.rating < 8 ? "crimson" : "green",
        fontWeight: "bold",
    };

    return (
        <div>

            <iframe
                width="100%"
                height="600"
                src={movie.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <div className="movie-detail-container">
                <div className="movie-specs">
                    <h3 className="movie-name">Movie Name:{movie.name}</h3>
                    <p className="movie-rating" style={styles}> Rating:
                        ⭐ {movie.rating}/10
                    </p>
                </div>
                <p className="movie-summary">Summary:{movie.summary}</p>
                <h3 className="movie-director"> Director: {movie.director}</h3>
                <Button
                    onClick={() => history.goBack()}
                    variant="contained"
                    startIcon={<KeyboardBackspaceIcon />}>
                    Back
                </Button>
            </div>
        </div>
    );
}
