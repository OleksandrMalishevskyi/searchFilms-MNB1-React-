import React, { Component } from 'react';
import MovieList from '../components/movieList/MovieList';
import Search from '../components/search/Search';
import Preloader from '../components/preloader/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {

  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?s=matrix&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
    });
}

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true })
    fetch(`https://www.omdbapi.com/?s=${str}${type !== 'all' ? `&type=${type}` : ''}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      })
  }
  render() {
    const { movies, loading } = this.state;

    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {loading ? (<h3>abrakadabra</h3> 
        ) : (<MovieList movies={movies} />
        )}
      </main>
    );
  }
}

