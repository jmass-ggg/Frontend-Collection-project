import React, { useEffect, useState } from 'react'
import MovieCards from '../components/MovieCards'
import { getFavoriteMovie,searchQuery } from '../service/api'

const Home = () => {
    const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
    useEffect(() => {
    const loadMovies = async () => {
      try {
        const popularMovies = await getFavoriteMovie()
        setMovies(popularMovies)
      } catch (error) {
        console.error(error)
        setError('Failed to load movies')
      }
    }

    loadMovies()
  }, [])
    const handleSearch = async (event) => {
    event.preventDefault()

    try {
      const results = await searchMovies(search)
      setMovies(results)
    } catch (error) {
      console.error(error)
      setError('Search failed')
    }
  }

  return (
    <div>
        <form onSubmit={handleSearch}>
            <input placeholder='Search the movie ..' value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
       {movies.map((movie) => (
        <MovieCards movie={movie} key={movie.id} />
      ))}
      
    </div>
  )
}

export default Home