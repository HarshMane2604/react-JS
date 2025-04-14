import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Footer from './components/Footer'
import { Home, About, ContactUs, ExploreMore} from './components/index'
import Layout from './Layout'
import Tasks from './components/Task/Task'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>

        <Route path='Home' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='ExploreMore' element={<ExploreMore/>}/>
        <Route path='Tasks' element={<Tasks/>}/>
        
      </Route>  
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
