import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavigationBar from './components/navbar';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';
import About from './pages/About';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
