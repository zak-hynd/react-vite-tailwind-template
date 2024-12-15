import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'
  import App from './App'
  import Home from '../src/pages/Home'
  import About from '../src/pages/About'

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>  
      </>
    )
  )
  
  export default router