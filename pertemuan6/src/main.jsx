import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import Dashboard from './Dashboard.jsx'
import DashboardItem from './DashboardItem.jsx'
import Profile from './Profile.jsx'
import FormPage from './FormPage.jsx'
import ContactApp from './contact/ContactApp.jsx'


const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/home', element:<Home/>},
  {path:'/about', element:<About/>},
  {path:'*', element:<NotFoundPage/>},
  {path:'/dashboard', element:<Dashboard/>},
  {path:'/dasboard/:id', element:<DashboardItem/>},
  {path:'/profile', element:<Profile/>},
  {path:'/form', element:<FormPage/>},
  {path:'/contact', element:<ContactApp/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
