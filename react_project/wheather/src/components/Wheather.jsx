import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getWheather } from '../service/api'

const Wheather = () => {
  const [area, setArea] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!area.trim()) {
      setError('Please enter a country or city')
      return
    }

    try {
      setLoading(true)
      setError('')

      const result = await getWheather(area)

      navigate('/home', {
        state: result,
      })
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Your Weather Application</h2>

      <form onSubmit={handleSubmit}>
        <h4>Enter your area</h4>

        <input
          placeholder="USA"
          value={area}
          onChange={(event) => setArea(event.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  )
}
export default Wheather