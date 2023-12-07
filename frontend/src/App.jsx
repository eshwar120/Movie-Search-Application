import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Notfound from './components/Notfound'
import Navbar from './components/Navbar'
import { UserContextProvider } from './context/UserContext'
import './styles/utils.css'
import MovieInfo from './components/MovieInfo'
import Loading from './components/Loading'
import LandingPage from './components/LandingPage'
import Actor from './components/Actor'

function App() {

  return (
    <div className='bg-slate-100 dark:bg-gray-900'>
      <UserContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/movie/:id' element={<MovieInfo/>}/>
            <Route path='/actor/:id' element={<Actor/>}/>
            <Route path='/load' element={<Loading/>}/>
            <Route path='*' element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  )
}

export default App
