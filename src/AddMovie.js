import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

//when two components need the same data->
// put the data in the common parent component<App/>
//this pattern is called HOC- higher order coomponent
export function AddMovie({ movies, setMovies }) {
    const [name, setName] = useState(" ");
    const [poster, setPoster] = useState(" ");
    const [rating, setRating] = useState(" ");
    const [summary, setSummary] = useState(" ");
    const [director, setDirector] = useState(" ");
    const [trailer, setTrailer] = useState(" ");
    const addMovie = () => {
        const newMovie = {
            name,
            poster,
            rating,
            summary,
            director,
            trailer
        }; // shorhand for object


        //copy movie list and then add the new movie
        setMovies([...movies, newMovie]);
    };
    return (
        <div className="add-movie-form">
            <TextField value={name}
                onChange={(event) => setName(event.target.value)}
                label="Movie Name"
                variant="outlined" />
            <TextField value={poster}
                onChange={(event) => setPoster(event.target.value)}
                label="Movie Poster Url"
                variant="outlined" />
            <TextField value={rating}
                onChange={(event) => setRating(event.target.value)}
                label="Movie Rating"
                variant="outlined" />
            <TextField value={summary}
                onChange={(event) => setSummary(event.target.value)}
                label="Movie Summary"
                variant="outlined" />
            <TextField value={director}
                onChange={(event) => setDirector(event.target.value)}
                label="Movie  Director"
                variant="outlined" />
            <TextField value={trailer}
                onChange={(event) => setTrailer(event.target.value)}
                label="Movie  Trailer"
                variant="outlined" />
            <Button onClick={addMovie} variant="contained"> Add Movie</Button>
        </div>
    );

}
