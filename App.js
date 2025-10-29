import React, { useState } from "react";
import MovieList from "./MovieList";
import ShowTimings from "./ShowTimings";
import MovieCard from "./MovieCard";
import Login from "./login"; 
import "./login.css";
import leo from "./leo.jpg";
import master from "./master.jpg";
import coolie from "./coolie.jpg";
import vikram from "./vikram.jpg";
import gbu from "./gbu.jpg";
import jersey from "./jersey.jpg";
import mersal from "./mersal.jpg";
import amaran from "./amaran.jpg";
import premam from "./premam.jpg";
import dragon from "./dragon.jpg";
import pokkiri from "./pokkiri.jpg";
import maharaja from "./maharaja.jpg";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const movies = [
    { id: 1, title: "Leo", poster: leo },
    { id: 2, title: "Master", poster: master },
    { id: 3, title: "Coolie", poster: coolie },
    { id: 4, title: "Vikram", poster: vikram },
    { id: 5, title: "Good Bad Ugly", poster: gbu },
    { id: 6, title: "KGF 2", poster:"https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg"},
    { id: 7, title: "Jersey", poster: jersey },
    { id: 8, title: "Mersal", poster: mersal },
    { id: 9, title: "Amaran", poster: amaran },
    { id: 10, title: "Premam", poster: premam },
    { id: 11, title: "RRR", poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"},
    { id: 12, title: "Dragon", poster: dragon },
    { id: 13, title: "Pokkiri", poster: pokkiri },
    { id: 14, title: "Maharaja", poster: maharaja },
  ];

  const shows = [
    { id: 1, show_time: "10:00 AM", available_seats: 20 },
    { id: 2, show_time: "2:00 PM", available_seats: 15 },
    { id: 3, show_time: "6:00 PM", available_seats: 10 },
  ];

  const handleBook = (show, seats) => {
    alert(
      `🎟️ Booked ${seats} seat(s) for ${selectedMovie.title} at ${show.show_time}`
    );
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : !selectedMovie ? (
        <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
      ) : (
        <ShowTimings
          movie={selectedMovie}
          shows={shows}
          onBack={() => setSelectedMovie(null)}
          onBook={handleBook}
        />
      )}
    </div>
  );
}

export default App;
