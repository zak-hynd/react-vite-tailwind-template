import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'
  import App from './App'
  import Home from '../src/pages/Home'
  import About from '../src/pages/About'
  import GameOfLife from './components/projects/conways/GameOfLife'
import Porjects from './components/Porjects'

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conways" element= {<GameOfLife />} />
          <Route path="/some-projects" element= {<Porjects />} />
        </Route>  
      </>
    )
  )
  
  export default router