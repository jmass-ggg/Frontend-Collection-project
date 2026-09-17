import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wheather from './components/Wheather'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wheather />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App