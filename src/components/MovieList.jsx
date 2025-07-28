import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/moviesSlice";
import { Link } from "react-router-dom";

export default function MovieList() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [sortKey, setSortKey] = useState("title");
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const sortedMovies = [...movies].sort((a, b) => {
    const valA = a[sortKey];
    const valB = b[sortKey];
    return asc ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  return (
    <div>
      <h1>Star Wars Movies</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th onClick={() => { setSortKey("title"); setAsc(!asc); }}>Title</th>
              <th onClick={() => { setSortKey("release_date"); setAsc(!asc); }}>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedMovies.map((movie, index) => (
              <tr key={index}>
                <td><Link to={`/movie/${index}`}>{movie.title}</Link></td>
                <td>{movie.release_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
