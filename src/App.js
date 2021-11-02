

export default function App() {
  // const names =["ajith", "kewal","Ryed","Deepa","Robin"]
  const movies = [
    {
      name: "1. Nenokkadine",
      pic: "https://i.pinimg.com/736x/fe/f2/b5/fef2b5d2edad7c05b9ca2d98a97a2868--mahesh-babu-movie.jpg",
      rating: 8.2,
      summary: "A rock star must overcome his psychological inhibitions to seek revenge for his parents' death.",
      director: "Sukumar"
    },

    {
      name: "2. Athadu",
      pic: "https://www.filmibeat.com/ph-big/2011/09/1317193759547588.jpg",
      rating: 8.2,
      summary: "A gunman for hire is framed for murder, and assumes a dead man's identity while hiding from the police.",
      director: "Trivikram Srinivas"
    },

    {
      name: "3. Okkadu",
      pic: "https://pbs.twimg.com/media/EP1GKeDU8AAHJ9A.jpg",
      rating: 8.0,
      summary: "A Kabbadi player rescues a young woman from an unwanted marriage and hides her in his home.",
      director: "Gunasekhar"
    },

    {
      name: "4. Pokiri",
      pic: "https://m.media-amazon.com/images/M/MV5BZjFiMDljZmItZjE1Ny00ZDAyLTlkNDktNmExYTc1YmJhYmJmXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_.jpg",
      rating: 7.9,
      summary: "A local goon's killer instincts earn him his girlfriend's disapproval, a corrupt cop's enmity and a wanted don's attention.",
      director: "Puri Jagannadh"
    },

    {
      name: "5. Srimanthudu",
      pic: "https://i.pinimg.com/originals/15/b9/4b/15b94bd7ac26e79a98b17939cbe3c0f5.jpg",
      rating: 7.6,
      summary: "Harsha, a multi-millionaire who has everything, still feels that there is something missing in his life. In an attempt to fill the void, he adopts a village to bring change in the people.",
      director: "Koratala Siva"
    },

    {
      name: "6. Khaleja ",
      pic: "https://64.media.tumblr.com/11eb5ea6cb56c417b4706511191d12e1/tumblr_nfnoau8gIL1r9esjeo1_1280.jpg",
      rating: 7.6,
      summary: "When a mysterious illness ravages a remote village, the villagers embrace a reluctant taxi driver as their savior.",
      director: "Trivikram Srinivas"
    },

    {
      name: "7. Dookudu",
      pic: "https://wallpaperaccess.com/full/2490926.jpg",
      rating: 7.4,
      summary: "Ajay, (Mahesh Babu) an undercover cop, is assigned to catch a dangerous mafia don with whom he has a personal score to settle.",
      director: "Sreenu Vaitla"
    },

    {
      name: "8. Spyder",
      pic: "https://moviegalleri.net/wp-content/gallery/mahesh-babu-spyder-movie-release-tomorrow-posters/mahesh-babu-spyder-movie-release-tomorrow-posters-382fb76.jpg",
      rating: 6.6,
      summary: "An intelligence officer attempts to save the city from a psychotic serial killer who kills people just to hear their loved ones cry.",
      director: "A.R. Murugadoss"
    },

    {
      name: "9. Businessman",
      pic: "https://i.pinimg.com/474x/50/90/14/509014d1dbbb64c764aeb951327941c1.jpg",
      rating: 7.2,
      summary: "Surya arrives in Mumbai to revive the mafia and ends up making enemies who threaten his life.",
      director: "Puri Jagannadh"
    }
  ];
  return (
    <div className="App">
      {/* //   <h1>Hello World</h1>
    // <Msg name="kewal"/>
    // <Msg name="anirud"/>
    // <Msg name="deepa"/> */}
      <Heading />
      {movies.map((mv) => (
        <Msg name={mv.name} pic={mv.pic} rating={mv.rating} summary={mv.summary} director={mv.director} />
      ))}
    </div>
  );
}
function Msg({ name, pic, rating, summary, director }) {

  return (

    <div className="container">
      <img className="movie-poster" src={pic} alt={name} />

      <h3 className="movie-name">{name}</h3>
      <h3 className="movie-rating"><b>Rating:</b> <span class="fa fa-star checked"></span> {rating}/10</h3>
      <h3 className="movie-director"><b>Director:</b>{director}</h3>
      <p className="movie-summary"><b>Summary:</b> {summary}</p>

    </div>


  );
}
function Heading() {
  return (
    <div>
      <h1 className="heading">Mahesh Babu's Top Rated Movies</h1>
    </div>
  );
}

