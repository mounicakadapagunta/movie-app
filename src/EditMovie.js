import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

//when two components need the same data->
// put the data in the common parent component<App/>
//this pattern is called HOC- higher order coomponent
export function EditMovie({ movies, setMovies }) {
    const { id } = useParams();
    const history = useHistory();
    const movie = movies[id];
    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [director, setDirector] = useState(movie.director);
    const [trailer, setTrailer] = useState(movie.trailer);

    const editMovie = () => {
        const updatedMovie = {
            name,
            poster,
            rating,
            summary,
            director,
            trailer,
        }; // shorhand for object

        //copy movie list and then add the new movie
        // setMovies([...movies, updatedMovie]);
        // replace the updatedMovie in the movie list(copy)
        const copyMovieList = [...movies]
        copyMovieList[id] = updatedMovie;
        setMovies(copyMovieList);
        history.push("/movies")
    };
    return (
        <div className="add-movie-form">
            <TextField value={name}
                onChange={(event) => setName(event.target.value)}
                label="Movie Name" variant="outlined" />
            <TextField value={poster}
                onChange={(event) => setPoster(event.target.value)}
                label="Movie Poster Url" variant="outlined" />
            <TextField value={rating}
                onChange={(event) => setRating(event.target.value)}
                label="Movie Rating" variant="outlined" />
            <TextField value={summary}
                onChange={(event) => setSummary(event.target.value)}
                label="Movie Summary" variant="outlined" />
            <TextField value={director}
                onChange={(event) => setDirector(event.target.value)}
                label="Movie  Director" variant="outlined" />
            <TextField value={trailer}
                onChange={(event) => setTrailer(event.target.value)}
                label="Movie Trailer" variant="outlined" />

            <Button onClick={editMovie} variant="contained"> Save Movie</Button>
        </div>
    );

}
