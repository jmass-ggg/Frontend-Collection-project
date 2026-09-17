import React, { useState ,useEffect} from 'react'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar';
import { getPopularMovie,searchQuery } from '../api';

const Home = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const loadPopularMovies=async () =>{
            try{
                const popularMovies=await getPopularMovie();
                setMovies(popularMovies)
            }
            catch(error){
                console.log(error)
                setError("Failed to load")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])
    
    const handleSearch=(e)=>{
        e.preventDefault();
        alert(search);
    }
  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input type='text' placeholder='Search for movies ..' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button type='submit'>Click me</button>
        </form>
        <div className='movies-grid'>
            {movies.map((movie)=>movie.title.toLowerCase().startsWith(search) && (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
  )
}
export default Home