import { useState } from "react";
import { Counter } from "./Counter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { CardActions, CardContent, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';


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
    <Card className="movie-container">
      <CardContent>
      <img src={poster} alt={name} className="movie-poster" />
      <div className="movie-specs">
        <h3 className="movie-name">{name}{" "}
          <IconButton onClick={() => setShow( ! show)} 
          className="movie-show-button" 
          color="primary" aria-label="hide" >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
          </IconButton>
        </h3>
        <p className="movie-rating" style={styles}>⭐ {rating}/10</p>
      </div>
      {/* conditional rendering */}
      {show ? <p className="movie-summary">{summary}</p> : " "}

      <h3 className="movie-director"> Director: {director}</h3>
<CardActions>
<Counter />
</CardActions> 
</CardContent>
    </Card>
  );
}
