import React from "react";
import { Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";
import Rating from "./Rating";

const MovieDetail = ({ movie }) => {
return (
    <Card>
    <CardBody>
        <CardTitle tag="h2">{movie.Title}</CardTitle>
        {movie.Poster && (
        <img
            src={movie.Poster}
            alt={movie.Title}
            className="mb-3"
            style={{ maxHeight: "400px" }}
        />
        )}
        <CardText>
        <strong>Year:</strong> {movie.Year}
        <br />
        <strong>Genre:</strong> {movie.Genre}
        <br />
        {movie.Director && (
            <>
            <strong>Director:</strong> {movie.Director}
            <br />
            </>
        )}
        {movie.Plot && (
            <>
            <strong>Plot:</strong> {movie.Plot}
            <br />
            </>
        )}
        {movie.Runtime && (
            <>
            <strong>Runtime:</strong> {movie.Runtime}
            <br />
            </>
        )}
        </CardText>
        <div className="mb-3">
        <Rating movieId={movie.imdbID} />
        </div>
        {movie.watched && <Badge color="success">Watched</Badge>}
    </CardBody>
    </Card>
);
};

export default MovieDetail;
