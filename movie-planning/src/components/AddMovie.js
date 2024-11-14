import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

const AddMovie = ({ onAddMovie }) => {
const [movie, setMovie] = useState({
    title: '',
    genre: '',
    year: '',
    poster: ''
});
const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.title || !movie.genre || !movie.year) {
    setError('Please fill in all required fields');
    return;
    }
    
    onAddMovie({
    ...movie,
    id: Date.now(),
    rating: 0,
    watched: false
    });
    
    setMovie({ title: '', genre: '', year: '', poster: '' });
    setError('');
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie(prev => ({
    ...prev,
    [name]: value
    }));
};

return (
    <Form onSubmit={handleSubmit} className="mb-4">
    {error && <Alert color="danger">{error}</Alert>}
    <FormGroup>
        <Label for="title">Title*</Label>
        <Input
            type="text"
            name="title"
            id="title"
            value={movie.title}
            onChange={handleChange}
            placeholder="Enter movie title"
        />
    </FormGroup>

    <FormGroup>
        <Label for="genre">Genre*</Label>
        <Input
            type="text"
            name="genre"
            id="genre"
            value={movie.genre}
            onChange={handleChange}
            placeholder="Enter genre"
        />
    </FormGroup>

    <FormGroup>
        <Label for="year">Year*</Label>
        <Input
            type="number"
            name="year"
            id="year"
            value={movie.year}
            onChange={handleChange}
            placeholder="Enter release year"
        />
    </FormGroup>

    <FormGroup>
        <Label for="poster">Poster URL</Label>
        <Input
            type="url"
            name="poster"
            id="poster"
            value={movie.poster}
            onChange={handleChange}
            placeholder="Enter poster URL"
        />
    </FormGroup>

    <Button color="primary" type="submit">Add Movie</Button>
    </Form>
);
};

export default AddMovie;