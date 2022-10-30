import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {

  // console.log(props.movies[0]);

  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.name}
          title={movie.mass}
          releaseDate={movie.height}
          openingText={movie.gender}
        />
      ))}
    </ul>
  );
};

export default MovieList;
