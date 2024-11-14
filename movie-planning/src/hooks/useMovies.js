import { useState, useEffect } from 'react';

const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=6ace2dec';

export const useMovies = () => {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [watchedMovies, setWatchedMovies] = useState([]);

const searchMovies = async (searchTerm) => {
    setLoading(true);
    try {
    const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
    );
    const data = await response.json();
    if (data.Search) {
        setMovies(data.Search);
    }
    setError(null);
    } catch (err) {
    setError('Failed to fetch movies');
    setMovies([]);
    } finally {
    setLoading(false);
    }
};

const markAsWatched = (movieId) => {
    setWatchedMovies(prev => [...prev, movieId]);
};

return {
    movies,
    loading,
    error,
    searchMovies,
    watchedMovies,
    markAsWatched
};
};
