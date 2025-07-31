//Movie Card
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: 10, marginBottom: 15, borderRadius: 5 }}>
      <h3>{movie.title}</h3>
      <img src={movie.image} alt={movie.title} style={{ width: '100%', maxWidth: 200 }} />
      <p>{movie.description}</p>
      <Link to={`/movie/${movie.id}`}>Xem chi tiết</Link>
    </div>
  );
};

export default MovieCard;
