
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'


function App() {


  return (
    <>

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/recipe/:id' element={<RecipeDetails/>} />
</Routes>

<Footer/>


    </>
  )
}

export default App
