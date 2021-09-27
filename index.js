import "./styles.css";
import React, { useState } from "react";

const moviedb = {
  Action: [
    { name: "Edge of tomorrow", duration: "1h 53min", rating: "95%" },
    { name: "The Old Guard", duration: "2h 5min", rating: "93%" },
    { name: "American Sniper", duration: "2h 12min", rating: "94%" },
    { name: "The Equalizaer", duration: "2h 12min", rating: "96%" },
    { name: "Baby Driver", duration: "1h 53min", rating: "92%" }
  ],

  Horror: [
    { name: "Alive", duration: "1h 38min", rating: "89%" },
    { name: "The Silence", duration: "1h 30min", rating: "88%" },
    { name: "Run", duration: "1h 29min", rating: "91%" },
    { name: "Aftermath", duration: "1h 54min", rating: "84%" },
    { name: "Insidious", duration: "1h 43min", rating: "85%" }
  ],

  SciFi: [
    { name: "Dark", duration: "3 seasons", rating: "89%" },
    { name: "Stranger Things", duration: "3 seasons", rating: "96%" },
    { name: "Inception", duration: "2h 28min", rating: "96%" },
    { name: "Mirage", duration: "2h 9min", rating: "92%" },
    { name: "Sense 8", duration: "2 seasons", rating: "84%" }
  ],

  Documentaries: [
    { name: "Greatest Events of WW II", duration: "1 season", rating: "92%" },
    { name: "The Social Dilemma", duration: "1h 34min", rating: "95%" },
    {
      name: "David Attenborough:A Life on Our Planet",
      duration: "1h 23min",
      rating: "94%"
    },
    { name: "Unabomber", duration: "1 season", rating: "89%" },
    { name: "Connected", duration: "1 season", rating: "89%" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Action");

  function genreClickHandler(genre) {
    //select genre on click
    setGenre(genre);
  }
  var genreList = Object.keys(moviedb);
  return (
    <div className="App">
      <h1>Netflix Suggestions</h1>
      <h4>Are you always confused about what to watch on Netflix? </h4>
      <h4>Then this space allows you to choose content from various Genres</h4>

      {genreList.map((movie) => (
        <button //creates buttons from the list of keys of object
          style={{
            cursor: "pointer",
            background: "#E5E7EB",
            borderRadius: "0.5rem",
            padding: "0.5rem  1rem",
            border: "1px solid black",
            margin: "1rem 0.3rem"
          }}
          onClick={() => genreClickHandler(movie)} //functionality
        >
          {movie}
        </button> // display content in the buttons
      ))}
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviedb[selectedGenre].map((
            movie //display the lists
          ) => (
            <li
              style={{
                listStyle: "none",
                padding: "2rem",
                border: "2px solid black",
                width: "35%",
                margin: "1rem 0.5rem",
                borderRadius: "0.7rem"
              }}
            >
              <div style={{ fontSize: "larger", fontStyle: "bold" }}>
                {movie.name}
              </div>
              <hr />
              <div style={{ fontSize: "medium" }}>
                Duration: {movie.duration}
              </div>
              <div style={{ fontSize: "medium" }}>Rating: {movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
