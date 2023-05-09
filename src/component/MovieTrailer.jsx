import React from 'react'
import { Link, useParams } from 'react-router-dom'
import YouTube from 'react-youtube'

const MovieTrailer = ({movies}) => {
    const { id } = useParams()
    const idMovie = Number(id)
    const movie = movies.find(elem => elem.id === idMovie)
    return (
        <div>
            <Link to={"/"} >
                <button className='btn'>Go Home</button>
            </Link>
            <h1> {movie.title} </h1> 
            <h3> {movie.discreption} </h3>
            <iframe width="560" height="315" 
            src= {`https://www.youtube.com/embed/${movie.trailer}`}
            title="YouTube video player" frameborder="0" 
            ></iframe>
            {/* <YouTube videoId={movie.trailer} /> */}
        
        </div>
    )
}

export default MovieTrailer