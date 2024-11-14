import Banner from './components/Banner';
import './App.css';
import NavBar from './components/NavBar';
import Pagination from './components/Pagination';
import Movies from './components/Movies';
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Favorite from './components/Favorite';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div>
      {/* <h1 className='text-3xl font-bold underline'>imdb</h1> */}
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={
          <>
            <Banner /> 
            <Movies /> 
            <Pagination />
          </>
        }>
        </Route>
        <Route path='/Favorites' element={
          <Favorite />
        }>
          
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
