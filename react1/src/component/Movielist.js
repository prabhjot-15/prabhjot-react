// import React, { useEffect, useState } from 'react';
// import MovieCard from './Moviecard';
// import { Container, Row, Col } from 'reactstrap';

// const MovieList = () => {
// const [movies, setMovies] = useState([]);
// const apiUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=6ace2dec';

// useEffect(() => {
//     fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => setMovies(data.Search || []));
// }, []);

// return (
//     <Container>
//     <Row>
//         {movies.map(movie => (
//         <Col key={movie.omdbID} >
//             <MovieCard movie={movie} />
//         </Col>
//         ))}
//     </Row>
//     </Container>
// );
// };

// export default MovieList;
