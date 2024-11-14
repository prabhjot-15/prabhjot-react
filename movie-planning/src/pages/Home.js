import React, { useState } from 'react';
import { Input, Button, Form, FormGroup, Alert, Spinner } from 'reactstrap';
import MovieList from '../components/MovieList';
import { useMovies } from '../hooks/useMovies';

const Home = () => {
const [searchTerm, setSearchTerm] = useState('');
const { movies, loading, error, searchMovies, watchedMovies, markAsWatched } = useMovies();

const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
    searchMovies(searchTerm);
    }
};

return (
    <div>
    <h1 className="mb-4">Movie Night Planning</h1>
    <Form onSubmit={handleSubmit} className="mb-4">
        <FormGroup className="d-flex">
        <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies..."
            className="me-2"
        />
        <Button color="primary" type="submit">
            Search
        </Button>
        </FormGroup>
    </Form>

    {loading && <Spinner color="primary">Loading...</Spinner>}
    {error && <Alert color="danger">{error}</Alert>}
    <MovieList
        movies={movies}
        watchedMovies={watchedMovies}
        onMarkWatched={markAsWatched}
    />
    </div>
);
};

export default Home;