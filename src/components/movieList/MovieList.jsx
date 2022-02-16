import React from 'react';
import MovieItem from '../movieItem/MovieItem';

function MovieList(props) {
  const {movies} = props;
  return (
    <div className="movies">
      {console.log(props)}
        {movies.map(movie => (
          <MovieItem key={movie.imdbID} {...movie}/>
  ))}
    </div>
  )
}

export default MovieList