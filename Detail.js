import React from 'react';
import { useParams } from 'react-router-dom';

const movieData = {
  1: { title: 'Inception', description: 'Chi tiết về phim Inception' },
  2: { title: 'Interstellar', description: 'Chi tiết về phim Interstellar' },
};

const DetailPage = () => {
  const { id } = useParams();
  const movie = movieData[id];

  if (!movie) return <p>Không tìm thấy phim</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

export default DetailPage;
