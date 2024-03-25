import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Clock from './components/Clock';
import Basics from './components/Basics';
import Faq from './components/Faq';
import Notification from './components/Notification';
import Tabbig from './components/Tabbig';
import Error404 from './components/Error404';
import Form_handling from './components/Form_handling';
import Toastify from './components/Toastify';
import Useeffect from './components/Useeffect';
const root = ReactDOM.createRoot(document.getElementById('root'));
let routesused = createBrowserRouter(
  [
    {
      path: '/clock',
      element: <Clock />
    },
    {
      path: '/',
      element: <Basics />
    },
    {
      path: '/Faq',
      element: <Faq />
    },
    {
      path: '/Notification',
      element: <Notification />
    },
    {
      path: '/Tabbing',
      element: <Tabbig />
    },{
      path:'*',
      element:<Error404/>
    },{
      path:'/Form_handling',
      element:<Form_handling/>
    }
    ,{
      path:'/Toastify',
      element:<Toastify/>
    },{
      path:'/useeffect',
      element:<Useeffect/>
    }

  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={routesused} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
