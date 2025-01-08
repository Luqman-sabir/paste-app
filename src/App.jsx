
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
       <Navbar/>
       <Home/>
      </div>
    },
    {
      path:"/paste",
      element:
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    },
  ]
)

function App() {
  return (
   <div className='bg-[#212121] min-h-[100vh]'>
   <RouterProvider router={router}/>
   </div>
  )
}

export default App
