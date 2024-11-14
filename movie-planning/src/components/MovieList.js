import React from 'react';
import { Row, Col } from 'reactstrap';
import MovieCard from './MovieCard';

const MovieList = ({ movies, watchedMovies, onMarkWatched }) => {
return (
    <Row>
    {movies.map((movie) => (
        <Col key={movie.imdbID} sm="6" md="4" lg="3">
        <MovieCard
            movie={movie}
            isWatched={watchedMovies.includes(movie.imdbID)}
            onMarkWatched={onMarkWatched}
        />
        </Col>
    ))}
    </Row>
);
};
export default MovieList;