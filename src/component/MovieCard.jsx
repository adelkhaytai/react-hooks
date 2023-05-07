import React from 'react'
import { movieData } from './Data'
import { Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'


const MovieCard = ({ movie }) => {
    return (
        <Card sx={{ width: 300 }}>
            <CardMedia
                sx={{ height: 500 }}
                image={movie.posterUrl}
                title="green iguana"
            />
            <CardContent>
                <Typography fontSize={'15px'} gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography  variant="body2" color="text.secondary">
                    {movie.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Rating name="read-only" value={movie.rating} readOnly/>
            </CardActions>
        </Card>)
}

export default MovieCard