import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = useSelector((state) => state.movies.movies[+id]);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{movie.title}</h2>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Producer:</strong> {movie.producer}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Opening Crawl:</strong></p>
      <pre>{movie.opening_crawl}</pre>
    </div>
  );
}
