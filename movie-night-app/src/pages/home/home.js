import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


const Home = () => {
    const [popularMovies,setpopularMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setpopularMovies(data.results ))
    },[])
    return (
        <>
            <div className="poster">
                <Carousel 
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    { 
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none" , color:"white"}} to={`/movie/${movie.id}`}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/w500${movie && movie.backdrop_path}`}/>
                            </div>
                            <div className="posterImage_overlay">
                                <div className="posterImage_title">{movie ? movie.original_title: ""}</div>
                                <div className="posterImage_runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className= "posterImage_rating">
                                        {movie ? movie.vote_average : ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Home
