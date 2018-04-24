import React, { Component } from 'react';
import GenreList from './GenreList';
import { findAllGenres } from './../api';
import { Route } from 'react-router-dom';
import GenreForm from './GenreForm';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  async componentDidMount() {
    let genres = await findAllGenres();
    this.setState({ genres });
  }

  addGenre = (genre) => {
    this.setState({
      genres: this.state.genres.concat(genre)
    });
  }

  render() {
    return (
      <div>
        <GenreList genres={this.state.genres} />
        <Route path="/genres/new" render={() => {
          return (
            <GenreForm addGenre={this.addGenre} />
          )
        }} />
      </div>
    );
  }
}
