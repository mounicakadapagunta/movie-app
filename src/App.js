import { useState } from "react";
import { MovieList } from "./MovieList";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { AddColor } from "./AddColor";
import { MovieDetails } from "./MovieDetails";
import { Welcome } from "./Welcome";
import { NotFound } from "./NotFound";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";

//component definition
export default function App() {

  const INITIAL_MOVIES = [
    {
      name: "Athadu",
      poster: "https://www.filmibeat.com/ph-big/2011/09/1317193759547588.jpg",
      rating: 8.2,
      summary: "A gunman for hire is framed for murder, and assumes a dead man's identity while hiding from the police.",
      director: "Trivikram Srinivas",
      trailer: "https://www.youtube.com/embed/Y8LrS2i3EkU",
    },

    {
      name: "Okkadu",
      poster: "https://pbs.twimg.com/media/EP1GKeDU8AAHJ9A.jpg",
      rating: 8.0,
      summary: "A Kabbadi player rescues a young woman from an unwanted marriage and hides her in his home.",
      director: "Gunasekhar",
      trailer: "https://www.youtube.com/embed/OlKmTiZ1Nmc",
    },

    {
      name: "Pokiri",
      poster: "https://m.media-amazon.com/images/M/MV5BZjFiMDljZmItZjE1Ny00ZDAyLTlkNDktNmExYTc1YmJhYmJmXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_.jpg",
      rating: 7.9,
      summary: "A local goon's killer instincts earn him his girlfriend's disapproval, a corrupt cop's enmity and a wanted don's attention.",
      director: "Puri Jagannadh",
      trailer: "https://www.youtube.com/embed/nWgHIe6Sy_o",
    },

    {
      name: "Srimanthudu",
      poster: "https://i.pinimg.com/originals/15/b9/4b/15b94bd7ac26e79a98b17939cbe3c0f5.jpg",
      rating: 7.6,
      summary: "Harsha, a multi-millionaire who has everything, still feels that there is something missing in his life. In an attempt to fill the void, he adopts a village to bring change in the people.",
      director: "Koratala Siva",
      trailer: "https://www.youtube.com/embed/dlvgG-hZ9xc",
    },

    {
      name: "Khaleja ",
      poster: "https://64.media.tumblr.com/11eb5ea6cb56c417b4706511191d12e1/tumblr_nfnoau8gIL1r9esjeo1_1280.jpg",
      rating: 7.6,
      summary: "When a mysterious illness ravages a remote village, the villagers embrace a reluctant taxi driver as their savior.",
      director: "Trivikram Srinivas",
      trailer: "https://www.youtube.com/embed/YraH4F8SdU0",
    },

    {
      name: "Dookudu",
      poster: "https://wallpaperaccess.com/full/2490926.jpg",
      rating: 7.4,
      summary: "Ajay, (Mahesh Babu) an undercover cop, is assigned to catch a dangerous mafia don with whom he has a personal score to settle.",
      director: "Sreenu Vaitla",
      trailer: "https://www.youtube.com/embed/R15hfyOQ_GE",
    },

    {
      name: "Spyder",
      poster: "https://moviegalleri.net/wp-content/gallery/mahesh-babu-spyder-movie-release-tomorrow-posters/mahesh-babu-spyder-movie-release-tomorrow-posters-382fb76.jpg",
      rating: 6.6,
      summary: "An intelligence officer attempts to save the city from a psychotic serial killer who kills people just to hear their loved ones cry.",
      director: "A.R. Murugadoss",
      trailer: "https://www.youtube.com/embed/og1zP3u0b4k",
    },

    {
      name: "Businessman",
      poster: "https://i.pinimg.com/474x/50/90/14/509014d1dbbb64c764aeb951327941c1.jpg",
      rating: 7.2,
      summary: "Surya arrives in Mumbai to revive the mafia and ends up making enemies who threaten his life.",
      director: "Puri Jagannadh",
      trailer: "https://www.youtube.com/embed/xo_ZUn99wQ4",
    },
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES)
  return (
    <div className="App">
      <nav className="navbar">
        <Link style={{ textDecoration: 'none' }} to="/"> 🏠 Home</Link>
        <Link style={{ textDecoration: 'none' }} to="/movies"> 🎬 Movies</Link>
        <Link style={{ textDecoration: 'none' }} to="/add-movies"> ➕ Add Movies</Link>
        <Link style={{ textDecoration: 'none' }} to="/color-game"> 🎨 Color Game </Link>
      </nav>


      <Switch>
        {/* route maches by substring */}
        <Route exact path="/">
          <Welcome />
        </Route>
        {/* old route is films and the new 
        one is movies to redirecting the page  */}
        {/* <Route path="/movies"> */}
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/edit/:id">
          <EditMovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails movies={movies} />
        </Route>

        <Route path="/movies">
          <MovieList movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/add-movies">
          <AddMovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/color-game">
          <AddColor />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

