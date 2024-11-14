import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const MovieCard = ({ movie, isWatched, onMarkWatched }) => {
return (
    <Card className="mb-4 h-100">
    <img src={movie.Poster} alt={movie.Title} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
    <CardBody>
        <CardTitle tag="h5">{movie.Title}</CardTitle>
        <CardText>Year: {movie.Year}</CardText>
        <Rating movieId={movie.imdbID} />
        {isWatched ? (
        <Badge color="success" className="me-2">Watched</Badge>
        ) : (
        <Button color="primary" onClick={() => onMarkWatched(movie.imdbID)} className="me-2">
            Mark as Watched
        </Button>
        )}
        <Button tag={Link} to={`/movie/${movie.imdbID}`} color="info">
        View Details
        </Button>
    </CardBody>
    </Card>
);
};

export default MovieCard;