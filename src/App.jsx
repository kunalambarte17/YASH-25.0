import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Cultural from "./pages/Cultural.jsx";
import Sports from "./pages/Sports.jsx";
import Technical from './pages/Technical.jsx';


function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/cultural',
      element: <Cultural/>
    },
    {
      path:'/technical',
      element: <Technical/>
    },
    {
      path:'/sports',
      element: <Sports/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
