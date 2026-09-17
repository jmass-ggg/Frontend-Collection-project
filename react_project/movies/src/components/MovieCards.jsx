import React from 'react'

const MovieCards = ({movie}) => {
    const onFavoriteClick=() =>{
        alert("button clicked");
    }
  return (
    <div>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className='movie-overlap'>
                <button className='favorite'>❤</button>
            </div>
            <div >
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>

        </div>
    </div>
  )
}

export default MovieCards