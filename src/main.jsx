import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';
import About from './About/About';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    children : [
      {
        path : "/blog",
        element : <Blog></Blog>
      },
      {
        path : "contact",
        element : <Contact></Contact>
      },
      {
        path : "about",
        element : <About></About>

      }
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
