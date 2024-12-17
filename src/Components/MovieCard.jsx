import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='movie-poster min-w-52 pr-4 cursor-pointer'>
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard;