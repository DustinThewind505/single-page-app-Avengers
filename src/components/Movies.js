import React from 'react';

function Movies(props) {
  return (
    <ul className='movie-list'>
      {props.data.movies.map(movie => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  );
}

export default Movies;
