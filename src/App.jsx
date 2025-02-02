import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Cultural from "./pages/Cultural.jsx";
import Sports from "./pages/Sports.jsx";
import Technical from './pages/Technical.jsx';
import Culturalview from './pages/Culturalview.jsx';
import Culturalsingleevent from './pages/Culturalsingleevent.jsx';
import Sportview from './pages/Sportview.jsx';
import Sportsingleevent from './pages/Sportsingleevent.jsx';
import Technicalsingleevent from './pages/Technicalsingleevent.jsx';
import Technicalview from './pages/Technicalview.jsx';
import Contact from './pages/Contact.jsx';


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
    },
    {
      path:'/culturalview',
      element : <Culturalview/>
    },
    {
      path:'/culturalviewsingle/:id',
      element : <Culturalsingleevent/>
    },
    {
      path:'/sportviewsingle/:id',
      element : <Sportsingleevent/>
    },
    {
      path:'/sportview',
      element : <Sportview/>
    },
    {
      path:'/Technicalviewsingle/:id',
      element : <Technicalsingleevent/>
    },
    {
      path:'/Technicalview',
      element : <Technicalview/>
    },
    {
      path:'/contact',
      element: <Contact/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
