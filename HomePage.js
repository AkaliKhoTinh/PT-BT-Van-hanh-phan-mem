import React from 'react';
import MovieCard from '../components/MovieCard';

const mockMovies = [
  { id: 1, title: 'Inception', image: 'https://via.placeholder.com/200', description: 'Phim khoa học viễn tưởng của Nolan' },
  { id: 2, title: 'Interstellar', image: 'https://via.placeholder.com/200', description: 'Hành trình xuyên không gian' },
];

const HomePage = () => {
  return (
    <div>
      <h2>Danh sách phim</h2>
      {mockMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default HomePage;
