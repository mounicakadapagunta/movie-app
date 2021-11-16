import { useParams } from "react-router-dom";

export function MovieDetails({ movies }) {
    const { id } = useParams();
    const movie = movies[id];
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

            </div>
        </div>
    );
}
