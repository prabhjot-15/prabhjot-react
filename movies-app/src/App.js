import React ,{useEffect , useState} from "react";
import Movie from "./components/Movie";

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies , setMovies] = useState([]); 
  useEffect(() =>{
    fetch(API_URL).then((res) => res.json())
    .then((data) =>{
      console.log(data);
      setMovies(data);
    });
  } , []);
  
  return (
    <div>
      {movies.length>0 && movies.map((movie) =>
        <Movie />)}
      
    </div>
  );
}

export default App;
