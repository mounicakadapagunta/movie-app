import { useState } from "react";
// import { useEffect } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom"
import { API_URL } from "../global-constants";

//when two components need the same data->
// put the data in the common parent component<App/>
//this pattern is called HOC- higher order component
export function AddMovie() {
    const history = useHistory();
    const [name, setName] = useState(" ");
    const [poster, setPoster] = useState(" ");
    const [rating, setRating] = useState(" ");
    const [summary, setSummary] = useState(" ");
    const [director, setDirector] = useState(" ");
    const [trailer, setTrailer] = useState(" ");

    //useEffect takes in a callback function and a dependency array 
    //updates only when props or state changes
    //useEffect calls every time when there is no dependency array is provided
    // useEffect(() => {
    //     console.log('Movie is Updated',{
    //         name,
    //         poster,
    //         rating,
    //         summary,
    //         director,
    //         trailer
    //     });
    // },[]);//dependency array


    const addMovie = () => {
        const newMovie = {
            name,
            poster,
            rating,
            summary,
            director,
            trailer
        }; // shorthand for object
        //copy movie list and then add the new movie
        //setMovies([...movies, newMovie]);\\

        // FOR POST METHOD WE NEED
        // 1.method should be POST method
        // 2. Body -data should be in json format
        // 3.headers - JSON - "content-type": "application/json",

        fetch(`${API_URL}/movies`,
            {
                method: "POST",
                body: JSON.stringify(newMovie),
                headers: {
                    "content-type": "application/json",
                },
            }).then(() => history.push("/movies"));
    }

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


};
