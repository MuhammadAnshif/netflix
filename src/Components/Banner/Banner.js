import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Banner.css';
import { API_KEY, imageUrl } from '../../constants/Constant';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`);
      setMovies(response.data.results);
    };

    fetchData();

    const interval = setInterval(() => {
      setCurrentMovieIndex((currentMovieIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMovieIndex, movies.length]);

  const currentMovie = movies[currentMovieIndex];

  return (
    <div className='banner' style={{ backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ''})` }}>
      <div className='content'>
        <h1 className='title'>{currentMovie ? currentMovie.title : ''}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{currentMovie ? currentMovie.overview : ''}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;