import React, { Component } from 'react';
import MovieList from '../components/movieList/MovieList';
import Search from '../components/search/Search';
import Preloader from '../components/preloader/Preloader';

export default class Main extends Component {

  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?s=matrix&apikey=f351a23b')
          .then(response => response.json())
          .then(data => this.setState({movies: data.Search}))
          
  }
  render() {
    const {movies} = this.state;
   
    return (
      <main className='container content'>
        <Search/>
        {
          movies.lenght ? (
            <MovieList movies={this.state.movies}/>
          ) : <h3>Loading...</h3>
        }
        <MovieList movies={movies}/></main>
    )
  }
}
