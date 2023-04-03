import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import First from './First/First';
import Friends from './Friends/Friends';
import Friend from './Friend/Friend';
import FriendDetail from './FriendDetail/FriendDetail';
import Posts from './Posts/Posts';
import PostDetail from './PostDetail/PostDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path : "/",
        element : <First></First>
      },
      {
        path : '/blog',
        element : <Blog></Blog>

      },
      {
        path : '/friends',
        element : <Friends></Friends>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users')

      },
      {
        path : 'friend/:friendId',
        element : <FriendDetail></FriendDetail>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`) 

      },
      {
        path : 'post',
        element : <Posts></Posts>,
        loader : (params) => fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      {
        path : 'postDetail/:postDetailId',
        element : <PostDetail></PostDetail>, 
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postDetailId}`)
      },
      
      {
        path : '/contact',
        element : <Contact></Contact>

      },
      {
        path : '/about',
        element : <About></About>

      },
      {
        path : '*',
        element : <div>404 Not Found</div>

      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
