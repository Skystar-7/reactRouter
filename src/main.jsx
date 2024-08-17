import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css'
import Layout from './layout.jsx'
//import { RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import AboutUs from './component/AboutUs/AboutUs.jsx'
import ContactUs from './component/ContactUs/ContactUs.jsx'
import User from './component/User/User.jsx';
import Github, { githubInfoLoader } from './component/Github/Github.jsx';
//import ContactUs from './components/Contact/ContactUs.jsx'
/*const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
      element:<Home/>
  },
  {
    path:"about",
    element:<AboutUs/>
    },
    {
      path:"contact",
      element:<ContactUs/>
      }
  ]
  }
])*/
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      loader={githubInfoLoader}
       path='github' 
       element={<Github/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
//Here if you want to fetch data according to userid useparams prop
//watch what is being pass and same will be passsed in user