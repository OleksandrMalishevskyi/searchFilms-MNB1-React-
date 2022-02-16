import React from 'react';
import MovieItem from '../movieItem/MovieItem';

function MovieList(props) {
  const {movies = []} = props;
  return (
    <div className="movies">
        {movies.length ? movies.map(movie => (
          <MovieItem key={movie.imdbID} {...movie}/>
  )) : (<h4>Nothing found</h4>)
}
    </div>
  )
}

export default MovieList