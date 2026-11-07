import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Jogo from './pages/Jogo'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jogo' element={<Jogo />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
