import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import './index.css';
import App from './App';
import InfoCard from './components/InfoCard';
import FavList from './components/FavList';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    // errorElement:<Error/>,
    children:[
      {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/searched/:id",
      element:<InfoCard/>
    },
    {
      path: "/contact",
      element:<Contact/>
    },
    {
      path: "/favlist",
      element:<FavList/>
    },
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

