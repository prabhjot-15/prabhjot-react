import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Spinner, Alert } from 'reactstrap';
import Rating from '../components/Rating';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=http://www.omdbapi.com/?i=tt3896198&apikey=6ace2dec`
        );
        const data = await response.json();
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError('Movie not found');
        }
      } catch (err) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <Spinner color="primary">Loading...</Spinner>;
  if (error) return <Alert color="danger">{error}</Alert>;
  if (!movie) return null;

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h2">{movie.Title}</CardTitle>
        <img src={movie.Poster} alt={movie.Title} className="mb-3" style={{ maxHeight: '400px' }} />
        <CardText>
          <strong>Year:</strong> {movie.Year}<br />
          <strong>Director:</strong> {movie.Director}<br />
          <strong>Plot:</strong> {movie.Plot}<br />
          <strong>Genre:</strong> {movie.Genre}<br />
          <strong>Runtime:</strong> {movie.Runtime}
        </CardText>
        <Rating movieId={movie.imdbID} />
      </CardBody>
    </Card>
  );
};

export default MovieDetailPage;