import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: 20, backgroundColor: "brown" }}>🎥 MOVIEBUFF</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
          padding: "20px",
          justifyItems: "center",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "180px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3 style={{ marginTop: "10px" }}>{movie.title}</h3>

            <button
              onClick={() => onSelectMovie(movie)}
              style={{
                padding: "6px 10px",
                backgroundColor: "#874c4cff",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              View Shows
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;