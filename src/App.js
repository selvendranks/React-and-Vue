import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  let content = <p>no movies found</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>content is Loading</p>;
  }

  if (error) {
    content = <p>error fetching</p>;
  }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/people/1");

      if (!response.ok) {
        throw new Error("Error while fetching");
      }

      const movie = await response.json();
      console.log(movie);
      setMovies((movies) => [...movies, movie]);
      console.log(movies);
      console.log(dummyMovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length != 0 && <MoviesList movies={movies} />}
        {!isLoading && !error && movies.length == 0 && <p>no Movies found</p>}
        {isLoading && <p>Loading Please wait</p>}
        {error && <p>{error }</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
