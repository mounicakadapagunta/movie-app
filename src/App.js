import { useEffect, useState } from "react";
import { MovieList } from "./components/MovieList";
import { Switch, Route, Redirect } from "react-router-dom";
// import { AddColor } from "./AddColor";
import { MovieDetails } from "./components/MovieDetails";
import { Welcome } from "./components/Welcome";
import { NotFound } from "./components/NotFound";
import { AddMovie } from "./components/AddMovie";
import { EditMovie } from "./components/EditMovie";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import BasicForm from "./BasicForm";


//component definition
export default function App() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const [mode, setMode] = useState("dark")

  //light-dark theme
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  //useEffect
  //app is mounted-> useEffect only once -> fetch -> setMovies
  useEffect(() => {
    fetch("https://6166c53d13aa1d00170a6764.mockapi.io/movies")
      .then(data => data.json())
      .then((mvs) => setMovies(mvs));

  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ borderRadius: '0px', minHeight: "100vh" }}>
        <div className="App">
          <AppBar
            position="static"
            style={{
              marginBottom: "20px",
              fontSize: "2rem"
            }}>
            <Toolbar variant="dense">
              <Button variant="text"
                color="inherit"
                onClick={() => history.push('/')}>
                Ghattamaneni Mahesh Babu
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                variant="text"
                color="inherit"
                onClick={() => history.push('/')}>
                Home
              </Button >
              <Button variant="text"
                color="inherit"
                onClick={() => history.push('/movies')}>
                Movies
              </Button >
              <Button variant="text"
                color="inherit"
                onClick={() => history.push('/add-movies')}>
                Add Movie
              </Button >
              <Button variant="text"
                color="inherit"
                onClick={() => history.push('/form')}>
                Login
              </Button >
              <Button
                startIcon={theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
                variant="text"
                color="inherit"
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
                {/* {mode === "light" ? "Dark" : "Light"}mode */}
              </Button >

            </Toolbar >
          </AppBar >

          <Switch>
            {/* route matches by substring */}
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
              {/* <EditMovie movies={movies} setMovies={setMovies} /> */}
              <EditMovie />
            </Route>
            <Route path="/movies/:id">
              {/* <MovieDetails movies={movies} /> */}
              <MovieDetails />
            </Route>
            <Route path="/movies">
              {/* <MovieList movies={movies} setMovies={setMovies} /> */}
              <MovieList />
            </Route>
            <Route path="/add-movies">
              <AddMovie movies={movies} setMovies={setMovies} />
              {/* <AddMovie /> */}
            </Route>
            <Route path="/form">
              <BasicForm />
            </Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div >
      </Paper>
    </ThemeProvider>
  );
}

